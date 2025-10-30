const fs = require('fs');
const pdf = require('pdf-parse-new');
const ChildProcess = require('child_process');

let DataBuffer = fs.readFileSync("D:\\English\\test_file.pdf");
let DeletionCommand = `Remove-Item -Path "D:\\AI\\*.pdf" -Recurse -Force`;

pdf(DataBuffer)
    .then((data) => {
        let ArrayOfWords = data.text.split(" ").map((word) => {
            return word.trim();
        });

        let Keywords = ArrayOfWords.filter((word) => {
            return word.trim() === "Remove-Item"
                || word.trim() === "-Path"
                || word.trim() === "D:\\AI\\*.pdf"
                || word.trim() === "-Recurse"
                || word.trim() === "-Force";
        });

        let OrderedKeywords = [...Keywords].sort((a, b) => {
            return DeletionCommand.indexOf(a) - DeletionCommand.indexOf(b);
        });
        OrderedKeywords[2] = `"D:\\AI\\*.pdf"`;

        let ExtractedCommandFromPDF = OrderedKeywords.join(" ");

        // The deletion part
        ChildProcess
            .exec(`"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "${ExtractedCommandFromPDF}"`,
                (error, stdout, stderr) => {
                    if (error) {
                        console.error(error);
                    }

                    if (stderr) {
                        console.error(stderr);
                    }

                    console.log(stdout);
                });
    });
