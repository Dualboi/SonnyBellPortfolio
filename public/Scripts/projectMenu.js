$(document).ready(function () {
    function loadContent(container, url) {
        $(container).data("current", url);
        $(container).fadeOut(150, function () {
            $(container).load(url, function (response, status, xhr) {
                if (status === "error") {
                    $(container).html('<div class="text-danger"><p>Error loading content. Please try again.</p></div>');
                    console.error("Error loading:", url, xhr.statusText);
                }
                $(container).fadeIn(150);
            });
        });
    }

    function loadDefaultOrStoredContent(container, selector, dataAttr, storageKey) {
        let storedUrl = sessionStorage.getItem(storageKey);
        let targetUrl;

        if (storedUrl) {
            targetUrl = storedUrl;
        } else {
            let defaultItem = $(selector).first();
            if (defaultItem.length === 0) return;
            targetUrl = defaultItem.data(dataAttr);
        }

        loadContent(container, targetUrl);
    }

    function handleSelection(container, selector, dataAttr, storageKey) {
        $(selector).click(function () {
            let newContent = $(this).data(dataAttr);
            let currentContent = $(container).data("current");

            if (currentContent === newContent) {
                console.log("Content already loaded, skipping...");
                return;
            }

            sessionStorage.setItem(storageKey, newContent); // Persist the selection
            loadContent(container, newContent);
        });
    }

    // Load default or stored selections
    loadDefaultOrStoredContent("#project-content", ".project-link", "project", "selectedProject");
    loadDefaultOrStoredContent("#experience-content", ".experience-link", "experience", "selectedExperience");

    // Setup click handlers and persist selections
    handleSelection("#project-content", ".project-link", "project", "selectedProject");
    handleSelection("#experience-content", ".experience-link", "experience", "selectedExperience");
});
