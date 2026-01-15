// list.js
const shortcuts = {
    adi:"resources/250520726130-adi-hindi-d25"
};

function resolveShortcut() {
    const query = window.location.search.replace("?", "").trim();

    if (!query || !shortcuts[query]) {
        showIncorrect();
        return;
    }

    showLoading();
    setTimeout(() => {
        window.location.href = shortcuts[query];
    }, 500); // tiny delay for UX
}

function showLoading() {
    document.body.innerHTML = `
        <div class="full-center">
            <h4>Please wait a sec…</h4>
        </div>`;
}

function showIncorrect() {
    document.body.innerHTML = `
        <div class="full-center">
            <h4>Incorrect URL</h4>
        </div>`;
}
