timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;






function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
}


function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    background("White");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}




function clearCanvas() {
    background("White");
}


function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

All_the_Names = ["Rain", "Cake", "Ball", "Camel", "Bread", "Brain", "Tree", "Eye", "Dolphin", "Hand", "Flower", "HotDog", "Burger", "Elephant", "fork", "Knee", "grass", "Guitar", "Grill", "Ice-Cream"];

function RandomValue() {
    randomValue = Math.floor(Math.random() * 18);
    randomThing = All_the_Names[randomValue]
    console.log(randomThing);

    document.getElementById("randomText").innerHTML = "Sketch to be Drawn : " + randomThing;
    sketch = randomThing;
    localStorage.setItem("sketch", sketch);
}

function draw() {
    check_sketch();
    if (drawn_sketch == localStorage.getItem("sketch")) {
        answer_holder = "set";
        score = score + 1;
        document.getElementById("score").innerHTML = "Score: " + score;
    }


    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }

}



function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    drawn_sketch = results[0].label;
    document.getElementById("label").innerHTML = "Your Sketch: " + results[0].label;
    document.getElementById("confidence").innerHTML = "Confidence: " + Math.round(results[0].confidence * 100) + "%";
    if(document.getElementById("label").innerHTML == document.getElementById("randomText"))
    {
        window.location = "Win.html"
    }
    utterThis = new SpeechSynthesisUtterance(results[0].label)
    synth.speak(utterThis);


}

function check_sketch() {
    timer_counter++;
    document.getElementById("Timer").innerHTML = "Timer: " + timer_counter;
    if (timer_counter > 500) {
        timer_counter = 0;
        timer_check = "completed";
    }
    if (timer_check == "completed" || answer_holder == "set") {
        timer_check = "";
        answer_holder = "";
        RandomValue();
    }
}

function updateCanvas() {
    background("white");
    Quick_draw_data_set = ["aircraft carrier", "airplane", "alarm clock", "ambulance", "angel", "animal migration", "ant", "anvil", "apple", "arm", "asparagus", "axe", "backpack", "banana", "bandage", "barn", "baseball", "baseball bat", "basket", "basketball", "bat", "bathtub", "beach", "bear", "beard", "bed", "bee", "belt", "bench", "bicycle", "binoculars", "bird", "birthday cake", "blackberry", "blueberry", "book", "boomerang", "bottlecap", "bowtie", "bracelet", "brain", "bread", "bridge", "broccoli", "broom", "bucket", "bulldozer", "bus", "bush", "butterfly", "cactus", "cake", "calculator", "calendar", "camel", "camera", "camouflage", "campfire", "candle", "cannon", "canoe", "car", "carrot", "castle", "cat", "ceiling fan", "cello", "cell phone", "chair", "chandelier", "church", "circle", "clarinet", "clock", "cloud", "coffee cup", "compass", "computer", "cookie", "cooler", "couch", "cow", "crab", "crayon", "crocodile", "crown", "cruise ship", "cup", "diamond", "dishwasher", "diving board", "dog", "dolphin", "donut", "door", "dragon", "dresser", "drill", "drums", "duck", "dumbbell", "ear", "elbow", "elephant", "envelope", "eraser", "eye", "eyeglasses", "face", "fan", "feather", "fence", "finger", "fire hydrant", "fireplace", "firetruck", "fish", "flamingo", "flashlight", "flip flops", "floor lamp", "flower", "flying saucer", "foot", "fork", "frog", "frying pan", "garden", "garden hose", "giraffe", "goatee", "golf club", "grapes", "grass", "guitar", "hamburger", "hammer", "hand", "harp", "hat", "headphones", "hedgehog", "helicopter", "helmet", "hexagon", "hockey puck", "hockey stick", "horse", "hospital", "hot air balloon", "hot dog", "hot tub", "hourglass", "house", "house plant", "hurricane", "ice cream", "jacket", "jail", "kangaroo", "key", "keyboard", "knee", "knife", "ladder", "lantern", "laptop", "leaf", "leg", "light bulb", "lighter", "lighthouse", "lightning", "line", "lion", "lipstick", "lobster", "lollipop", "mailbox", "map", "marker", "matches", "megaphone", "mermaid", "microphone", "microwave", "monkey", "moon", "mosquito", "motorbike", "mountain", "mouse", "moustache", "mouth", "mug", "mushroom", "nail", "necklace", "nose", "ocean", "octagon", "octopus", "onion", "oven", "owl", "paintbrush", "paint can", "palm tree", "panda", "pants", "paper clip", "parachute", "parrot", "passport", "peanut", "pear", "peas", "pencil", "penguin", "piano", "pickup truck", "picture frame", "pig", "pillow", "pineapple", "pizza", "pliers", "police car", "pond", "pool", "popsicle", "postcard", "potato", "power outlet", "purse", "rabbit", "raccoon", "radio", "rain", "rainbow", "rake", "remote control", "rhinoceros", "rifle", "river", "roller coaster", "rollerskates", "sailboat", "sandwich", "saw", "saxophone", "school bus", "scissors", "scorpion", "screwdriver", "sea turtle", "see saw", "shark", "sheep", "shoe", "shorts", "shovel", "sink", "skateboard", "skull", "skyscraper", "sleeping bag", "smiley face", "snail", "snake", "snorkel", "snowflake", "snowman", "soccer ball", "sock", "speedboat", "spider", "spoon", "spreadsheet", "square", "squiggle", "squirrel", "stairs", "star", "steak", "stereo", "stethoscope", "stitches", "stop sign", "stove", "strawberry", "streetlight", "string bean", "submarine", "suitcase", "sun", "swan", "sweater", "swingset", "sword", "syringe", "table", "teapot", "teddy-bear", "telephone", "television", "tennis racquet", "tent", "The Eiffel Tower", "The Great Wall of China", "The Mona Lisa", "tiger", "toaster", "toe", "toilet", "tooth", "toothbrush", "toothpaste", "tornado", "tractor", "traffic light", "train", "tree", "triangle", "trombone", "truck", "trumpet", "tshirt", "umbrella", "underwear", "van", "vase", "violin", "washing machine", "watermelon", "waterslide", "whale", "wheel", "windmill", "wine bottle", "wine glass", "wristwatch", "yoga", "zebra", "zigzag"];
    Random_number = Math.floor((Math.random() * Quick_draw_data_set.length) + 1);
    element_of_array = Quick_draw_data_set[Random_number];
    sketch = element_of_array;
    document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch To Be Drawn: " + sketch;
}