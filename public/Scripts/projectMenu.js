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

    function loadInitialContent(container, selector, dataAttr, storageKey) {
        const storedUrl = sessionStorage.getItem(storageKey);
        const defaultItem = $(selector).first();

        const targetUrl = storedUrl || (defaultItem.length > 0 ? defaultItem.data(dataAttr) : null);

        if (targetUrl) {
            loadContent(container, targetUrl);
        }
    }

    function setupClickHandler(container, selector, dataAttr, storageKey) {
        $(selector).on("click", function () {
            const newContent = $(this).data(dataAttr);
            const currentContent = $(container).data("current");

            if (newContent && currentContent !== newContent) {
                sessionStorage.setItem(storageKey, newContent);
                loadContent(container, newContent);
            }
        });
    }

    // Only load once on page load
    loadInitialContent("#project-content", ".project-link", "project", "selectedProject");
    loadInitialContent("#experience-content", ".experience-link", "experience", "selectedExperience");

    // Set up user interaction handlers
    setupClickHandler("#project-content", ".project-link", "project", "selectedProject");
    setupClickHandler("#experience-content", ".experience-link", "experience", "selectedExperience");
});
