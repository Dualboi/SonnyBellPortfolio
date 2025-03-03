$(document).ready(function () {
    $(".list-group-item").click(function (e) {
        e.preventDefault(); // Prevent default action

        // Find the associated project from the `data-project` attribute of the `<a>` tag
        var project = $(this).find("a").data("project");

        console.log("Clicked item, loading project:", project); // Debugging

        // If the same project is already loaded, do nothing
        if ($("#project-content").data("current") === project) {
            console.log("Project already loaded, skipping...");
            return;
        }

        // Store the current project to prevent duplicate reloads
        $("#project-content").data("current", project);

        // Show a loading message while content loads
        $("#project-content").html('<div class="text-center text-muted"><p>Loading...</p></div>');

        // Fade out content before loading new content
        $("#project-content").fadeOut(200, function () {
            $("#project-content").load(project, function (response, status, xhr) {
                if (status === "error") {
                    $("#project-content").html('<div class="text-danger"><p>Error loading content. Please try again.</p></div>');
                    console.error("Error loading:", project, xhr.statusText);
                } else {
                    console.log("Project loaded successfully:", project);
                }
                
                // Fade in new content
                $("#project-content").fadeIn(200);
            });
        });
    });
});
