$(document).ready(function () {
    // Handle project selection
    $(".project-link").click(function (e) {
        e.preventDefault();

        var project = $(this).data("project");
        console.log("Loading project:", project);

        if ($("#project-content").data("current") === project) {
            console.log("Project already loaded, skipping...");
            return;
        }

        $("#project-content").data("current", project);
        $("#project-content").html('<div class="text-center text-muted"><p>Loading...</p></div>');

        $("#project-content").fadeOut(200, function () {
            $("#project-content").load(project, function (response, status, xhr) {
                if (status === "error") {
                    $("#project-content").html('<div class="text-danger"><p>Error loading content. Please try again.</p></div>');
                    console.error("Error loading:", project, xhr.statusText);
                }
                $("#project-content").fadeIn(200);
            });
        });
    });

    // Handle experience selection
    $(".experience-link").click(function (e) {
        e.preventDefault();

        var experience = $(this).data("experience"); // FIXED: Use correct attribute
        console.log("Loading experience:", experience);

        if ($("#experience-content").data("current") === experience) {
            console.log("Experience already loaded, skipping...");
            return;
        }

        $("#experience-content").data("current", experience);
        $("#experience-content").html('<div class="text-center text-muted"><p>Loading...</p></div>');

        $("#experience-content").fadeOut(200, function () {
            $("#experience-content").load(experience, function (response, status, xhr) {
                if (status === "error") {
                    $("#experience-content").html('<div class="text-danger"><p>Error loading content. Please try again.</p></div>');
                    console.error("Error loading:", experience, xhr.statusText);
                }
                $("#experience-content").fadeIn(200);
            });
        });
    });
});
