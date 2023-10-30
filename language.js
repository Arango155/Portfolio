var display_translate = 0;


function changeLanguage(display_translate) {

    if (display_translate == 0) {
        document.getElementById('hi').innerText = "Hello! 👋🏽 I'm";
        document.getElementById('intro').innerHTML = "I'm an engineer systems student located in Guatemala looking for new opportunities around the world. 📍";
        document.getElementById('title').innerHTML = "Systems engineering student";
        document.getElementById('about').innerHTML = "With a natural curiosity and knack for problem solving, I am not only learning the ins and outs of systems engineering, but also actively contributing my experience to the field of electronic and mechanical technology. 📶";
        document.getElementById('me').innerHTML = "ABOUT ME";
        document.getElementById('download').innerHTML = " DOWNLOAD CV";
        document.getElementById('download').href = "Resume.docx.pdf";
        document.getElementById('projects').innerHTML = "Projects";
        document.getElementById('con').innerHTML = "CONTACT";
        document.getElementById('touch').innerHTML = "Lets keep in touch 🖐🏽";
        document.getElementById('call').innerHTML = "Call me";
        document.getElementById('location').innerHTML = "Location";
        document.getElementById('mail').innerHTML = "Email";
        document.getElementById('button').innerHTML = "Coding skills";
        document.getElementById('button2').innerHTML = "Soft skills";
    }

    else if (display_translate == 1) {
        document.getElementById('hi').innerText = "Hola! 👋🏽 Yo soy";
        document.getElementById('intro').innerHTML = "Soy un estudiante de ingeniería en sistemas ubicado en Guatemala en busca de nuevas oportunidades alrededor del mundo. 📍";
        document.getElementById('title').innerHTML = "Estudiante de ingeniería de sistemas";
        document.getElementById('about').innerHTML = "Con una curiosidad natural y una habilidad especial para la resolución de problemas, no sólo estoy aprendiendo los entresijos de la ingeniería de sistemas, sino que también aporto activamente mi experiencia al campo de la tecnología electrónica y mecánica. 📶";
        document.getElementById('download').innerHTML = " DESCARGAR CV";
        document.getElementById('download').href = "Curriculum.pdf";
        document.getElementById('projects').innerHTML = "Proyectos";
        document.getElementById('me').innerHTML = "ACERCA DE MI";
        document.getElementById('con').innerHTML = "CONTACTO";
        document.getElementById('touch').innerHTML = "Mantengámonos en contacto 🖐🏽";
        document.getElementById('call').innerHTML = "Llámame";
        document.getElementById('location').innerHTML = "Ubicación";
        document.getElementById('mail').innerHTML = "Correo electronico";
        document.getElementById('button').innerHTML = "Habilidades de programación";
        document.getElementById('button2').innerHTML = "Habilidades blandas";
    }
    else if (display_translate == 2) {

        document.getElementById('hi').innerText = "Salut! 👋🏽 Je suis";
        document.getElementById('intro').innerHTML = "Je suis un étudiant en ingénierie systèmes situé au Guatemala à la recherche de nouvelles opportunités à travers le monde. 📍";
        document.getElementById('title').innerHTML = "Étudiant en ingénierie des systèmes";
        document.getElementById('about').innerHTML = "Doté d'une curiosité naturelle et d'un talent pour la résolution de problèmes, j'apprends non seulement les tenants et les aboutissants de l'ingénierie des systèmes, mais je mets également activement mon expérience au service du domaine de la technologie électronique et mécanique. 📶";
        document.getElementById('me').innerHTML = "SUR MOI";
        document.getElementById('download').innerHTML = " TÉLÉCHARGER CV";
        document.getElementById('download').href = "Resume.docx.pdf";

        document.getElementById('projects').innerHTML = "Projets";
        document.getElementById('con').innerHTML = "CONTACT";
        document.getElementById('touch').innerHTML = "Restons en contact 🖐🏽";
        document.getElementById('call').innerHTML = "Appelez-moi";
        document.getElementById('location').innerHTML = "Emplacement";
        document.getElementById('mail').innerHTML = "E-mail";
        document.getElementById('button').innerHTML = "Compétences en codage";
        document.getElementById('button2').innerHTML = "Compétences générales";
    }

}