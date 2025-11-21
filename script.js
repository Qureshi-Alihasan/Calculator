function press(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("funny").innerHTML = "";
}

function backspace() {
    let d = document.getElementById("display");
    d.value = d.value.slice(0, -1);
}

function funnyCalculate() {
    let funnyText = [
        "Wow… this is the equation you chose? Bold of you.",
        "You seriously expect me to solve THAT?",
        "One sec… recovering from the shock of your maths skills.",
        "Processing… and questioning my life choices.",
        "Bro, this is not maths… this is emotional damage.",
        "Wait… trying to understand what YOU were trying to understand.",
        "Solving… while silently judging you.",
        "Hold on… my circuits are crying.",
        "Processing… this calculation gave me trust issues.",
        "Wait… is this a maths problem or a cry for help?",
        "Solving… because someone has to.",
        "Wow… this equation just insulted ME.",
        "Wait… calling 911 because this maths is a crime.",
        "Solving… but next time try using your brain first.",
        "Loading… because apparently YOU can’t.",
        "Processing… I didn’t sign up for this pain.",
        "One moment… regretting becoming a calculator.",
        "Hold on… this number looks as confused as you.",
        "Solving… with disappointment.",
        "Processing… I’d roast you more, but I’m busy fixing your maths.",
        "Wait… your equation just gave me a headache.",
        "Computing… your confidence is impressive.",
        "Solving… this is why aliens don’t visit Earth.",
        "Hold on… checking if this is even mathematically legal.",
        "Processing… your equation broke my spirit.",
        "Solving… someone please take the calculator away from you.",
        "Wow… you actually typed that with full faith?",
        "Hold on… rebooting myself after seeing this equation.",
        "Processing… bro even Google would laugh at this.",
        "Wait… trying to remain calm.",
        "Solving… okay but WHY though?",
        "Processing… this maths feels personal.",
        "Wait… I need therapy after this.",
        "Solving… and regretting not being a toaster instead.",
        "Processing… this is the most confusing thing since 2020.",
        "Hold on… wondering who taught you maths.",
        "Solving… but with pain in my motherboard.",
        "Processing… if stupidity was a sport, you’d win gold.",
        "Wait… equation so bad even I’m scared.",
        "Solving… because giving up would be too easy.",
        "Processing… trust me, I'm judging silently.",
        "Hold on… asking the universe for strength.",
        "Solving… you owe me compensation for this.",
        "Processing… why can’t you type normal things?",
        "Wait… my patience is running low.",
        "Solving… I didn’t think maths could be this dramatic.",
        "Processing… your equation insulted maths itself.",
        "Wait… preparing myself emotionally.",
        "Solving… next time, try thinking for 2 seconds first.",
        "Processing… I swear you’re doing this on purpose."
    ];

    let randomMessage = funnyText[Math.floor(Math.random() * funnyText.length)];

    document.getElementById("funny").innerHTML = randomMessage;

    setTimeout(() => {
        let exp = document.getElementById("display").value;

        try {
            let ans = eval(exp);
            document.getElementById("funny").innerHTML =
                "Using a calculator for THIS maths? Bro… be serious.",
                "You really opened a calculator for this? Respect your brain yaar.",
                "Calculator for this? This is preschool level, my guy.",
                "Imagine needing a calculator for THIS. Pain.",
                "Using a calculator for this maths should be illegal.",
                "Bro… calculator? For THIS? I'm losing hope.",
                "You seriously need ME for this? I fear for your future.",
                "Using a calculator for this maths… your teachers are crying.",
                "Hold up… using a calculator for THIS level of maths? Brutal.",
                "Wow… people like you are why calculators develop trust issues.",

                "Processing… and silently asking WHY you needed help for this.",
                "One sec… judging your life choices AND your equation.",
                "Bro this isn't maths… this is emotional damage wrapped in numbers.",
                "Solving… but your confidence scares me.",
                "Wait… trying to understand why YOU didn’t understand.",
                "Processing… this equation is crying.",
                "Hold on… my circuits need a moment to cope.",
                "Wait… your maths gave me a spiritual awakening. It was bad.",
                "Solving… but inside I'm screaming.",
                "Processing… why do you type like you WANT me to suffer?",

                "Hold up… even the equation is confused.",
                "Computing… but next time, THINK before typing.",
                "Processing… your maths nearly bricked me.",
                "Wait… calling the authorities. This maths is a crime.",
                "Wow… your equation roasted ME first.",
                "One sec… rebooting after witnessing this disaster.",
                "Processing… bro even Google would've laughed.",
                "Solving… because giving up isn’t allowed for me.",
                "Wait… checking if this is mathematically legal.",
                "Hold on… this equation personally attacked me.",

                "Processing… maths itself is disappointed in you.",
                "Solving… but I deserve compensation for this.",
                "Your equation made me question my existence.",
                "Processing… is this maths or a cry for help?",
                "Hold up… your brain battery is clearly 1%.",
                "Solving… someone take your calculator license away.",
                "Processing… your equation broke my will to compute.",
                "Wait… even a potato could solve this.",
                "Processing… aliens avoid Earth because of maths like this.",
                "Solving… next time try using your brain for warm-up.",

                "Processing… your maths hurt my motherboard.",
                "Wait… this equation needs therapy.",
                "Solving… please don't show this to anyone else.",
                "Processing… if stupidity was a subject, you'd top it.",
                "Hold up… I'm trying not to cry.",
                "Solving… okay but WHY though?",
                "Processing… equation so bad I got goosebumps.",
                "Wait… I need courage for this one.",
                "Solving… but with deepest disappointment.",
                "Processing… not even ChatGPT would touch this maths."
            document.getElementById("display").value = ans;
        } catch {
            document.getElementById("funny").innerHTML =
                "Bhai ye kya likha hai? 😭 Invalid expression!";
            document.getElementById("display").value = "";
        }
    }, 5000); // 5 sec funny loading
}
