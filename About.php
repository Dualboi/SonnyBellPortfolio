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

<!-- TODO add more content from cv and about plus styling for more profesional look -->
<body>
    <?php include 'Formatting/header.php'; ?>

    <div class="container position-relative mt-4">
        <div class="row align-items-center">
            <!-- Text on the Left -->
            <div class="col-md-8">
                <h2>Hello my name is Sonny Bell.</h2>
                <p style="margin-bottom: 5%; margin-top: 3%;">I am a second year Computer Science Student who is searching for a placement for third year, I enjoy Software design and engineering as well web development.</p>

                <h4>My Technical Skills and Experience</h3>
                    <ul class="skills-list">
                        <li><span class="bold-text">Programming Languages:</span> Python, C#, Java, HTML, CSS, JavaScript, PHP, SQL.</li>
                        <li><span class="bold-text">Tools & Frameworks:</span> .NET, Linux (Ubuntu, Kali), Bash, GitHub, Bootstrap, React.</li>
                        <li><span class="bold-text">Software Development:</span> Embedded systems, software testing, debugging.</li>
                        <li><span class="bold-text">IoT & AI Automation:</span> Hands-on experience with Bluetooth hardware, AI-driven automation.</li>
                    </ul>
            </div>

            <!-- Image on the Right -->
            <div class="col-md-4 text-end">
                <img src="Media\AboutPic.jpg" alt="Profile" class="profile-image">
            </div>
        </div>
    </div>
    <?php include 'Formatting/footer.php'; ?>

    <!-- Bootstrap Bundle (Ensure It’s At the End) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>