import React, { useCallback, useState } from 'react';
import { Upload, FileText, XCircle } from 'lucide-react';
import * as XLSX from 'xlsx';

const Admin = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = event.target.files?.[0];
    if (file) {
      if(file.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" && file.type !== "application/vnd.ms-excel") {
        setError("Invalid file type. Please upload an .xls or .xlsx file.");
        setUploadedFile(null);
        return;
      }
      setUploadedFile(file);
    }
  }, []);

  const processFile = useCallback(() => {
    if (uploadedFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target?.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                console.log("Uploaded data:", json);
                // Here you would typically send this JSON to your backend (Supabase)
                alert(`${json.length} records parsed successfully! Check the browser console for the data.`);
                setUploadedFile(null); // Clear after processing
            } catch (err) {
                setError("Failed to parse the Excel file. Please check its format.");
                console.error(err);
            }
        };
        reader.onerror = () => {
             setError("Failed to read the file.");
        }
        reader.readAsArrayBuffer(uploadedFile);
    }
  }, [uploadedFile]);


  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Halaman Admin</h1>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Unggah Massal Manuskrip (.xls, .xlsx)</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">Pilih file Excel untuk menambah atau memperbarui data manuskrip secara massal.</p>
        
        {!uploadedFile && (
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                    <Upload className="w-12 h-12 text-gray-400 mb-2" />
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">Pilih file untuk diunggah</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">atau seret dan lepas di sini</p>
                </label>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".xlsx, .xls" onChange={handleFileUpload} />
            </div>
        )}

        {error && (
            <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/50 border border-red-400 text-red-700 dark:text-red-300 rounded-md text-sm">
                {error}
            </div>
        )}

        {uploadedFile && !error && (
            <div className="mt-4">
                <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md">
                    <div className="flex items-center gap-3">
                        <FileText className="w-6 h-6 text-primary-500" />
                        <span>{uploadedFile.name}</span>
                    </div>
                    <button onClick={() => { setUploadedFile(null); setError(null); }} className="text-gray-500 hover:text-red-600">
                        <XCircle />
                    </button>
                </div>
                <button onClick={processFile} className="w-full mt-4 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
                    Proses File
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Admin;