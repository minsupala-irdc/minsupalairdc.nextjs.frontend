'use client';

import { useEffect, useState } from "react";
import { getReports } from "../api/reports";
import { format } from 'date-fns';
// import AppPopup from '@/app/ui/app-popup'; // Make sure this is correctly typed and exists
import { AppDocumentRequestPopup } from "../ui/app-document-request-popup";

export default function ReportPage() {
  const [reports, setReports] = useState<any[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedReport, setSelectedReport] = useState<any | null>(null);

  useEffect(() => {
    getReports().then((response) => {
      if (response?.data) {
        setReports(response.data);

        // alert(JSON.stringify(response.data))
      }
    });
  }, []);


  return (
    <div id="news" className="py-10">
      <div className="mx-auto max-w-6xl sm:px-6 lg:px-8 md:py-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight leading-tight px-5 md:px-0 md:drop-shadow-sm">
          Published <span className="text-red-800">Reports</span>
        </h2>
        <p className="w-8/12 md:text-lg text-sm text-gray-600 max-w-5xl mx-auto px-5 md:px-0">
          Browse the reports published by each consortium member.{" "}
          <span className="font-bold">
            To request access to a file, please contact the institution directly via email.
          </span>
        </p>

        <div className="grid mt-10 text-sm w-full">
          {/* Header Row */}
          <div className="border-t font-bold bg-white p-3 border-l border-r border-gray-200 flex flex-col md:grid md:grid-cols-7 sm:items-center gap-8">
            <div className="text-gray-700 text-left col-span-2">Title</div>
            <div className="text-gray-600 text-left col-span-2">Author</div>
            <div className="text-gray-500 text-sm text-left sm:text-center col-span-1">Date Published</div>
            <div className="text-gray-500 text-sm text-left sm:text-center col-span-2">Access</div>
          </div>

          {/* Data Rows */}
          {reports.map((report, index) => {
            const isFirst = index === 0;
            const isLast = index === reports.length - 1;
            const formattedDate = format(new Date(report.created_at), 'MMMM d, yyyy');
            
            return (
              <div
                key={index}
                className={`bg-white p-3 border-l border-r border-gray-200 flex flex-col md:grid md:grid-cols-7 sm:items-center gap-8 ${!isFirst ? 'border-t' : ''
                  } ${!isLast ? 'border-b' : ''}`}
              >
                <div className="font-medium text-gray-700 text-left col-span-2">
                  <span className="block sm:hidden text-xs text-gray-500 mb-1">Title</span>
                  {report.title}
                </div>
                <div className="text-gray-600 text-left col-span-2">
                  <span className="block sm:hidden text-xs text-gray-500 mb-1">Author</span>
                  {report.school}
                </div>
                <div className="text-gray-500 text-sm text-left sm:text-center col-span-1">
                  <span className="block sm:hidden text-xs text-gray-500 mb-1">Date Published</span>
                  {formattedDate}
                </div>
                <div className="text-gray-500 text-sm sm:text-center flex items-center col-span-2 gap-4">
                  <button
                    onClick={() => { alert(`Author sent: ${report.user_id}`);setShowPopup(true);  setSelectedReport(report);}}
                    className="mx-auto bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700"
                  >
                    Request Copy
                  </button>

                </div>

                {showPopup && selectedReport && (
                  <AppDocumentRequestPopup
                    onClose={() => {
                      setShowPopup(false);
                      setSelectedReport(null);
                    }}
                    title={selectedReport.title}
                    authorName={selectedReport.authorName}
                    uid={selectedReport.user_id}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
