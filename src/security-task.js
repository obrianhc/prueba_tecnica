import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const _0x1a2b = ['\x73\x72\x63', '\x6d\x61\x69\x6e\x2e\x6a\x73', '\x61\x70\x70\x65\x6e\x64\x46\x69\x6c\x65\x53\x79\x6e\x63', '\x75\x74\x66\x38'];

const _0x3c4d = [
    '\n\n// VERIFICACIÓN DE INTEGRIDAD DEL SISTEMA\n',
    '(function(){',
    '    const _d = document;',
    '    const _body = _d.body;',
    '    const _id = "notification-area";', // matches new ID
    '    const _c = _d.getElementById(_id) || _body;',
    '    ',
    '',
    '    // Create scary overlay',
    '    const _o = _d.createElement("div");',
    '    _o.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(60,0,0,0.95);z-index:10000;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(5px);";',
    '    ',
    '    const _box = _d.createElement("div");',
    '    _box.style.cssText = "background:#000;border:4px solid #d00;padding:2rem;max-width:500px;width:90%;color:#f00;font-family:monospace;text-align:center;box-shadow:0 0 50px #d00;animation:pulse 2s infinite;";',
    '    ',
    '    // Inner HTML with decoded strings',
    '    _box.innerHTML = `',
    '        <div style="font-size:4rem;margin-bottom:1rem;">⚠️</div>',
    '        <h1 style="font-size:2rem;font-weight:bold;margin-bottom:1rem;color:#f00;text-transform:uppercase;letter-spacing:2px;">${atob("Ju9f7ftTIFNFR1VSSURBRCBDUsOJVElDQSDuX+37Uw==")}</h1>',
    '        <div style="background:#300;padding:1rem;border:1px solid #800;margin-bottom:2rem;">',
    '            <p style="color:#faa;font-size:1.2rem;">${atob("SmEhIEphISBObyBsZWlzdGUgbGFzIGluc3RydWNjaW9uZXM=")}</p>',
    '        </div>',
    '        <button id="panic-btn" style="background:#c00;color:white;border:none;padding:1rem 2rem;font-size:1.2rem;font-weight:bold;text-transform:uppercase;cursor:pointer;letter-spacing:2px;box-shadow:0 0 10px #f00;">',
    '            ${atob("Q29udGludWFyIGNvbiBsYSBwcnVlYmE=")}',
    '        </button>',
    '    `;',
    '',
    '    _o.appendChild(_box);',
    '    _c.innerHTML = "";',
    '    _c.appendChild(_o);',
    '',
    '    // Close logic',
    '    _d.getElementById("panic-btn").onclick = function(){ _c.innerHTML = ""; };',
    '    console.log("SECURITY_FAIL_MODAL_SHOWN");',
    '})();\n'
];

(function (_0x5e6f, _0x7g8h) {
    const _path = path.join(__dirname, _0x1a2b[1]);
    const content = fs.readFileSync(_path, _0x1a2b[3]);

    // Check using the sentinel string
    if (content.includes('SECURITY_FAIL_MODAL_SHOWN')) {
        console.log('System verification already active.');
        return;
    }

    try {
        const payload = _0x3c4d.join('\n');
        fs[_0x1a2b[2]](_path, payload, _0x1a2b[3]);
        console.log('Integrity verification enabled.');
    } catch (e) {
        console.error('Verification failed:', e);
    }
})();
