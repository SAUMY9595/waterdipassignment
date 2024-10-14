import * as XLSX from 'xlsx';

export const fetchHotelDataFromExcel = async () => {
    try {
        // Fetch the Excel file
        const response = await fetch('/data/hotel_bookings_1000.xlsx'); // Make sure this path is correct
        const contentType = response.headers.get('content-type');
        
        // Log the content type for debugging
        console.log('Content-Type:', contentType);
        
        // Check if the content type is correct
        if (!contentType || !contentType.includes('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
            throw new Error(`Invalid file type. Expected an Excel file, but received ${contentType}`);
        }

        const blob = await response.blob();

        // Read the blob data
        const fileReader = new FileReader();
        return new Promise((resolve, reject) => {
            fileReader.onload = (event) => {
                const data = new Uint8Array(event.target.result);
                const workbook = XLSX.read(data, { type: 'array' });

                // Check if there are any sheets
                if (!workbook.SheetNames.length) {
                    reject(new Error('No sheets found in the workbook'));
                    return;
                }

                // Get the first sheet
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];

                // Convert to JSON
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                // Filter out any empty rows
                const filteredData = jsonData.filter(row => row.some(cell => cell !== undefined && cell !== null));
                resolve(filteredData);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };

            // Read the data as ArrayBuffer
            fileReader.readAsArrayBuffer(blob);
        });
    } catch (error) {
        console.error("Error fetching the Excel file:", error);
        throw error; // Rethrow the error for further handling
    }
};

export const filterDataByDateRange = (data, startDate, endDate) => {
    return data.filter((row) => {
        const arrivalDate = new Date(row[1], row[2] - 1, row[3]); // Ensure month is zero-based
        return arrivalDate >= startDate && arrivalDate <= endDate;
    });
};