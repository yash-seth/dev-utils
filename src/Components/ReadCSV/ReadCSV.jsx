import React from 'react'
import "./ReadCSV.css"
import { useState } from 'react'
import {read, utils} from 'xlsx'
import * as XLSX from 'xlsx';

function ReadCSV() {
    const [csvData, setCsvData] = useState([])

    const handleImport = $event => {
        const files = $event.target.files;
        if(files.length) {
            const csvFile = files[0]
            const reader = new FileReader();
            reader.onload = event => {
                const csv = read(event.target.result);
                const csvSheet = csv.SheetNames;

                if(csvSheet.length) {
                    const rows = utils.sheet_to_json(csv.Sheets[csvSheet[0]]);
                    setCsvData({"records" : rows});
                }
            };
            reader.readAsArrayBuffer(csvFile)
        }
    }

    // example of how the data should be for the download to work
    // const MYdata = [
    //     {"title":"AA", "website":"Foo"},
    //     {"title":"BB", "website":"Bar"}
    //   ]
      
      const printCSV = () => {
          const worksheet = XLSX.utils.json_to_sheet(csvData['records']);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
          XLSX.writeFile(workbook, "MYSavedData.xlsx");
      }

  return (
    <div className="ReadCSV-main">
        <b>Select Faculty CSV File</b>
        <input type = "file" name="csvfile" className="csv-file-input" id="csv-file-input" onChange={(e) => {handleImport(e);}} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
        <table>
            <thead>
                <tr>
                    <th className = "tableHeaders">Register No.</th>
                    <th className = "tableHeaders">Name</th>
                </tr>
            </thead>
            <tbody>
                {csvData["records"] ? (
                    csvData["records"].map((user, index) => (
                        <tr key = {index}>
                            <td>{user.name}</td>
                            <td>{user.regno}</td>
                        </tr>
                    ))
                ) : (
                    <td colSpan="4">No Data found.</td>
                )}
            </tbody>
        </table>
        <div className="download-csv">
            <button onClick={printCSV}>Download CSV</button>
        </div>
    </div>
  )
}

export default ReadCSV