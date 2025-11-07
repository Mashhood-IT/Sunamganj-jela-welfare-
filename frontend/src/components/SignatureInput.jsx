import { useState, useRef, useEffect } from 'react';
import { toPng } from 'html-to-image';
import toast from 'react-hot-toast';

const SignatureInput = ({ 
  name, 
  label, 
  value, 
  onChange, 
  preview, 
  disabled,
  onPreviewChange 
}) => {
  const [signMethod, setSignMethod] = useState('upload');
  const [typedName, setTypedName] = useState('');
  const [isPDF, setIsPDF] = useState(false);
  const [pdfName, setPdfName] = useState('');
  const signatureRef = useRef(null);

  const signatureFonts = [
    { name: 'Allura', value: 'Allura, cursive' },
    { name: 'Dancing Script', value: 'Dancing Script, cursive' },
    { name: 'Great Vibes', value: 'Great Vibes, cursive' },
    { name: 'Pacifico', value: 'Pacifico, cursive' },
    { name: 'Sacramento', value: 'Sacramento, cursive' }
  ];
  
  const [selectedFont, setSelectedFont] = useState(signatureFonts[0].value);

  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Allura&family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Pacifico&family=Sacramento&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create a File object to pass to parent
    onChange({ target: { name, value: file } });

    if (file.type === 'application/pdf') {
      setIsPDF(true);
      setPdfName(file.name);
      onPreviewChange(null);
    } else {
      setIsPDF(false);
      setPdfName('');
      const reader = new FileReader();
      reader.onloadend = () => onPreviewChange(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const generateSignature = async () => {
    if (!typedName.trim()) {
      alert('Please enter your name');
      return;
    }

    try {
      if (signatureRef.current) {
        // Convert the signature div to PNG
        const dataUrl = await toPng(signatureRef.current, {
          quality: 1,
          backgroundColor: '#ffffff',
          pixelRatio: 2
        });

        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const file = new File([blob], `signature-${name}.png`, { type: 'image/png' });

        onChange({ target: { name, value: file } });
        onPreviewChange(dataUrl);

        toast.success('✅ E-signature generated successfully!');
      }
    } catch (error) {
      console.error('Error generating signature:', error);
      toast.error('Failed to generate signature. Please try again.');
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-gray-700 font-medium">{label}</label>
      
      {/* Method Selection */}
      <div className="flex gap-4 mb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={`${name}-method`}
            value="upload"
            disabled={disabled}
            checked={signMethod === 'upload'}
            onChange={(e) => setSignMethod(e.target.value)}
            className="w-4 h-4 text-green-600"
          />
          <span className="text-gray-700">Upload File</span>
        </label>
        
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={`${name}-method`}
            value="esign"
            disabled={disabled}
            checked={signMethod === 'esign'}
            onChange={(e) => setSignMethod(e.target.value)}
            className="w-4 h-4 text-green-600"
          />
          <span className="text-gray-700">E-Signature</span>
        </label>
      </div>

      {/* Upload Method */}
      {signMethod === 'upload' && (
        <div>
          <input
            type="file"
            name={name}
            onChange={handleFileChange}
            accept="image/*,.pdf"
            disabled={disabled}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
          
          {isPDF ? (
            <div className="mt-2 flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-8-4h8M4 6h16v12H4V6z" />
              </svg>
              <span>PDF file selected: <span className="font-semibold">{pdfName}</span></span>
            </div>
          ) : preview && (
            <img
              src={preview}
              alt="Signature Preview"
              className="mt-2 w-48 h-24 object-contain border border-gray-300 rounded-md bg-gray-50"
            />
          )}
        </div>
      )}

      {/* E-Sign Method */}
      {signMethod === 'esign' && (
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm text-gray-600">
              Enter your full name
            </label>
            <input
              type="text"
              value={typedName}
              disabled={disabled}
              onChange={(e) => setTypedName(e.target.value)}
              placeholder="Type your name here"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-600">
              Select signature style
            </label>
            <select
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {signatureFonts.map((font) => (
                <option key={font.value} value={font.value}>
                  {font.name}
                </option>
              ))}
            </select>
          </div>

          {/* Signature Preview */}
          {typedName && (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
              <p className="text-xs text-gray-500 mb-2">Preview:</p>
              <div
                ref={signatureRef}
                className="bg-white p-6 rounded border border-gray-200"
                style={{
                  fontFamily: selectedFont,
                  fontSize: '48px',
                  color: '#000',
                  textAlign: 'center',
                  minHeight: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {typedName}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={generateSignature}
            disabled={!typedName.trim()}
            className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          >
            Generate Signature
          </button>

          {preview && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800 font-medium mb-2">✅ Signature Generated</p>
              <img
                src={preview}
                alt="Generated Signature"
                className="w-full max-w-xs mx-auto border border-gray-300 rounded bg-white p-2"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignatureInput;