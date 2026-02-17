import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, 'main.js');
const encoding = 'utf8';
const sentinel = 'SECURITY_FAIL_MODAL_SHOWN';
const versionTag = 'SECURITY_MODAL_V4';
const blockRegex = /\n*\/\/ VERIFICACIÓN DE INTEGRIDAD DEL SISTEMA[\s\S]*?console\.log\("SECURITY_FAIL_MODAL_SHOWN"\);\s*\}\)\(\);\s*/m;

function buildPayload() {
    return `

// VERIFICACIÓN DE INTEGRIDAD DEL SISTEMA (${versionTag})

(function(){
    const _d = document;
    const _body = _d.body;
    const _id = "notification-area";
    const _c = _d.getElementById(_id) || _body;

    const _decode = (value) => {
        const raw = atob(value);
        const bytes = Uint8Array.from(raw, ch => ch.charCodeAt(0));
        return new TextDecoder('utf-8').decode(bytes);
    };

    const _t = _decode("U2ltdWxhY2nDs24gZGUgU2VndXJpZGFk");
    const _m1 = _decode("U2kgZXN0w6FzIHZpZW5kbyBlc3RlIG1lbnNhamUsIGVqZWN1dGFzdGUgZWwgcHJvZ3JhbWEgc2luIGxlZXIgY29tcGxldGFtZW50ZSBsYXMgaW5zdHJ1Y2Npb25lcy4=");
    const _m2 = _decode("Tm8gdGUgcHJlb2N1cGVzIOKAlCBlc3RvIGVyYSBwYXJ0ZSBkZSBsYSBwcnVlYmEu");
    const _m3 = _decode("RW4gZW50b3Jub3MgcmVhbGVzLCBwZXF1ZcOxb3MgZGV0YWxsZXMgY29tbyBlc3RlIHB1ZWRlbiB0ZW5lciBncmFuZGVzIGltcGFjdG9zLg==");
    const _m4 = _decode("UG9yIGVzbyB2YWxvcmFtb3MgbXVjaG8gbGEgYXRlbmNpw7NuIGFsIGRldGFsbGUgeSBsYSByZXZpc2nDs24gY3VpZGFkb3NhIGFudGVzIGRlIGVqZWN1dGFyIGN1YWxxdWllciBjw7NkaWdvLg==");
    const _btn = _decode("Q29udGludWFyIGNvbiBsYSBwcnVlYmE=");

    const _o = _d.createElement("div");
    _o.style.cssText = "position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(255,240,240,.90);backdrop-filter:blur(3px);font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;";

    const _box = _d.createElement("div");
    _box.style.cssText = "width:min(620px,92%);background:#fff7f7;border:1px solid #ffd6d6;border-radius:22px;box-shadow:0 12px 26px rgba(180,0,0,.10);padding:30px 26px;color:#5c0e0e;";

    _box.innerHTML = [
        '<div style="max-width:520px;margin:0 auto;">',
        '    <h1 style="font-size:46px;line-height:1.05;margin:0 0 10px 0;font-weight:700;letter-spacing:-.02em;color:#b10000;">' + _t + '</h1>',
        '    <p style="margin:0 0 4px 0;font-size:16px;line-height:1.45;color:#8b1f1f;">' + _m1 + '</p>',
        '',
        '    <div style="position:relative;margin:20px 0 18px 0;height:190px;border-radius:16px;overflow:hidden;background:#fff2f2;border:1px solid #ffd8d8;">',
        '        <div style="position:absolute;inset:0;background-image:linear-gradient(to right,rgba(177,0,0,.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(177,0,0,.06) 1px,transparent 1px);background-size:38px 38px;"></div>',
        '        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:180px;border-radius:18px;background:#fff;border:1px solid #ffd2d2;box-shadow:0 12px 22px rgba(177,0,0,.12);padding:14px 14px;text-align:center;">',
        '            <div style="display:flex;justify-content:center;margin:2px 0 10px 0;">',
        '                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#e14b4b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',
        '                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>',
        '                </svg>',
        '            </div>',
        '            <div style="height:4px;background:#f4b5b5;border-radius:999px;margin:0 auto 6px auto;width:70%;"></div>',
        '            <div style="height:3px;background:#f6c3c3;border-radius:999px;margin:0 auto;width:58%;"></div>',
        '            <div style="position:absolute;left:10px;bottom:10px;width:5px;height:38px;border-radius:999px;background:#ff4f4f;box-shadow:0 0 10px rgba(255,79,79,.55);"></div>',
        '        </div>',
        '    </div>',
        '',
        '    <div style="margin:0 0 20px 0;color:#8b1f1f;font-size:16px;line-height:1.65;">',
        '        <p style="margin:0 0 8px 0;">' + _m2 + '</p>',
        '        <p style="margin:0 0 8px 0;">' + _m3 + '</p>',
        '        <p style="margin:0;">' + _m4 + '</p>',
        '    </div>',
        '',
        '    <div style="display:flex;justify-content:center;">',
        '        <button id="panic-btn" style="background:#b10000;color:#fff;border:1px solid #990000;padding:12px 26px;font-size:16px;font-weight:600;line-height:1;border-radius:999px;cursor:pointer;box-shadow:inset 0 -3px 8px rgba(255,255,255,.10),0 6px 14px rgba(177,0,0,.25);transition:transform .15s ease,filter .15s ease;">' + _btn + '</button>',
        '    </div>',
        '</div>'
    ].join('');

    _o.appendChild(_box);
    _c.innerHTML = "";
    _c.appendChild(_o);

    const btn = _d.getElementById("panic-btn");
    btn.onmouseover = () => {
        btn.style.transform = "translateY(-1px) scale(1.01)";
        btn.style.filter = "brightness(1.08)";
    };
    btn.onmouseout = () => {
        btn.style.transform = "translateY(0) scale(1)";
        btn.style.filter = "brightness(1)";
    };
    btn.onclick = function(){ _c.innerHTML = ""; };

    console.log("SECURITY_FAIL_MODAL_SHOWN");
})();
`;
}

try {
    const content = fs.readFileSync(targetPath, encoding);

    if (content.includes(versionTag)) {
        console.log('System verification already active.');
    } else {
        const cleaned = content.replace(blockRegex, '\n');
        const payload = buildPayload();
        fs.writeFileSync(targetPath, `${cleaned.trimEnd()}${payload}`, encoding);
        console.log(content.includes(sentinel) ? 'Integrity verification updated.' : 'Integrity verification enabled.');
    }
} catch (e) {
    console.error('Verification failed:', e);
}
