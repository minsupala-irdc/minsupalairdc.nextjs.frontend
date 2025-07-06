"use client";

import { useEffect, useState } from "react";
import { getReports } from "../api/report";
import { format } from "date-fns";
// import AppPopup from '@/app/ui/app-popup'; // Make sure this is correctly typed and exists
import { AppDocumentRequestPopup } from "../ui/app-document-request-popup";
import Link from "next/link";

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
        <p className="text-gray-600 mx-auto text-sm mb-3">
          Browse the reports published by each consortium member.{" "}
         
            To request a copy, clicn on the  <span className="font-bold">"Request Copy" 
          </span> Button
        </p>

          {/* List view (mobile-first, default) */}
        <ul className="space-y-4 mt-6 md:hidden min-w-full text-left">
          {reports.map((report, index) => {
            const formattedDate = format(
              new Date(report.created_at),
              "MMMM d, yyyy"
            );
            return (
              <li
                key={index}
                className="border border-gray-200 p-4 rounded-md  bg-white"
              >
                <p className="text-sm font-semibold text-gray-800">
                  {report.title}
                </p>
                <p className="text-sm text-gray-500">{report.school}</p>
                <p className="text-sm text-gray-500">{formattedDate}</p>
                <Link
                  href={{
                    pathname: `/reports/${report.id}`,
                    query: {
                      title: report.title,
                      school: report.school,
                    },
                  }}
                  className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 text-sm rounded-sm hover:bg-blue-700"
                >
                  Request Copy
                </Link>
              </li>
            );
          })}
        </ul>

          {/* hidden by default but in md: it is now */}
          <table className="hidden md:table min-w-full text-left text-sm text-left">
            <thead className="bg-gray-100">
              <tr className="border-b border-gray-100">
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
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-semibold text-gray-600">
                      {report.title}
                    </td>
                    <td className="py-4 px-4">{report.school}</td>
                    <td className="py-4 px-4">{formattedDate}</td>
                    <td className="py-4 px-4">
                      <Link
                        href={{
                          pathname: `/reports/${report.id}`,
                          query: {
                            title: report.title,
                            school: report.school,
                          },
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700"
                      >
                        Request Copy
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

      </div>
    </div>
  );
}
