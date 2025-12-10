
//madlib basics 
document.getElementById("madlib-form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page refresh

    const name = document.getElementById("name").value.trim();
    const place = document.getElementById("place").value.trim();
    const noun = document.getElementById("noun").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const adverb = document.getElementById("adverb").value.trim();

    const storyOutput = document.getElementById("story-output");

   if (!name || !place || !noun || !verb || !adjective || !adverb) {
        // Display cat image if any field is empty
        storyOutput.innerHTML = '<img src="images/cat.jpg" alt="Sad Cat" style="max-width:100%; display:block; margin:auto;">';
    } else {
        // All fields filled → generate story
        const story = `Once upon a time there was a named ${name}, going to the ${place}. The ${noun} and its friends were hungry on the way, so they stopped to eat ${adverb}. After they ate, they continued their journey ${verb}. Once they made it to the ${adjective} ${place}, they ran into a ${noun}, which was quite troubling. The ${name} and its friends headed home and went to sleep.`;
        storyOutput.textContent = story;
    }
});



