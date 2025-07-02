"use client";

import { useEffect, useState } from "react";
import { getReports } from "../api/reports";
import { format } from "date-fns";
// import AppPopup from '@/app/ui/app-popup'; // Make sure this is correctly typed and exists
import { AppDocumentRequestPopup } from "../ui/app-document-request-popup";

export default function ReportPage() {
  const [reports, setReports] = useState<any[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedReport, setSelectedReport] = useState<any | null>(null);

type Header = {
  label: string;
  width?: string;
};

const headers: Header[] = [
  { label: "Document", width: "w-4/12" },
  { label: "Type", width: "w-2/12" },
  { label: "Author", width: "" },
  { label: "Date", width: "2/12" },
  { label: "Access", width: "w-2/12" },
];

  useEffect(() => {
    getReports().then((response) => {
      if (response?.data) {
        setReports(response.data);
        // alert(JSON.stringify(response.data));
      }
    });
  }, []);

  return (
    <div id="news" className="py-10">
      <div className="mx-auto max-w-6xl sm:px-6 lg:px-8 md:py-16 flex flex-col items-center justify-center text-center">
        <p className="text-gray-600 mx-auto text-sm">
          Browse the reports published by each consortium member.{" "}
          <span className="font-bold">
            To request access to a file, please contact the institution directly
            via email.
          </span>
        </p>

        <table className="w-full mt-8 bg-white text-left text-sm  ">
          <thead className="bg-gray-100">
            <tr className="border-b-1 border-gray-100">
              {headers.map((header, key) => (
                <th key={key} className={`py-2 px-4 ${header.width || ""}`}>
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => {
              const formattedDate = format(
                new Date(report.created_at),
                "MMMM d, yyyy"
              );
              return (
                <tr key={index} className=" border-b-1 border-gray-100">
                  <td className="py-2 px-4 font-semibold text-gray-600">
                    {report.title}
                  </td>
                  <td className="py-2 px-4 ">{report.document_type}</td>
                  <td className="py-2 px-4 ">{report.school}</td>
                  <td className="py-2 px-4 ">{formattedDate}</td>
                  <td className="py-2 px-4 ">
                    <button
                      onClick={() => {
                        setShowPopup(true);
                        setSelectedReport(report);
                      }}
                      className="mx-auto bg-blue-600 text-white px-4 py-1 rounded-sm hover:bg-blue-700"
                    >
                      Request Copy
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="grid mt-10  w-full">
          {/* Header Row */}

          {/* Data Rows */}
        </div>

        {showPopup && selectedReport && (
          <AppDocumentRequestPopup
            onClose={() => {
              setShowPopup(false);
              setSelectedReport(null);
            }}
            document={selectedReport}
          />
        )}
      </div>
    </div>
  );
}
