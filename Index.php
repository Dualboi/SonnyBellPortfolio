<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sonny Bell</title>

    <!-- Bootstrap & Animate.css -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="stylesheet.css"> 

    <!-- jQuery (Ensure Correct Syntax) -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
    <!-- JavaScript for Project Menu -->
    <script src="Scripts/projectMenu.js"></script>

    <!-- FontAwesome -->
    <script src="https://kit.fontawesome.com/4a263b5a4b.js" crossorigin="anonymous"></script>
</head>
<body>

    <?php include 'Formatting/header.php'; ?>

    <main class="container my-5">
        <h1>My Work</h1>
    </main>

<!-- TODO add projects to project files and improve look and add content. -->
    <div class="container mt-4">
        <div class="row">
            <!-- Sidebar Menu -->
            <div class="col-md-3">
                <ul class="list-group">
                    <li class="list-group-item"><a href="#" class="project-link" data-project="Projects/Project1_CoffeeShopSystem.php">Coffee Shop Management</a></li>
                    <li class="list-group-item"><a href="#" class="project-link" data-project="Projects/Project2_C_SharpRegistrationSystem.php">C# Registration Application</a></li>
                    <li class="list-group-item"><a href="#" class="project-link" data-project="Projects/Project3_JavaProject.php">Java Project</a></li>
                </ul>
            </div>

            <!-- Content Display -->
            <div class="col-md-8">
                <div id="project-content" class="animate__animated animate__fadeIn">
                    <h3 class="text-primary">Welcome to My Portfolio</h3>
                    <p>Select a project from the menu to view details.</p>
                </div>
            </div>
        </div>
    </div>

    <?php include 'Formatting/footer.php'; ?>

    <!-- Bootstrap Bundle (Ensure It’s At the End) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
