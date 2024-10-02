const say = require('say');

// Use default system voice and speed
say.speak('Hello!');

// Stop the text currently being spoken
say.stop();

// More complex example (with an 'Alex' voice) and slow speed
say.speak('Hello?', 'Alex', 0.50);

say.speak("I’m sorry, Dave");
