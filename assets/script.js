var topics = ['HTML','CSS','Git','JavaScript'];

function listTopics(){
    for ( var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}
function selectTopic() {
    if (topics[0] === 'HTML'){
        console.log ("Let's study HTML!");
    } else if (topics[0] === 'CSS'){
        console.log ("Let's study CSS!")
    } else if (topics[0] === 'Git'){
        console.log("Let's study Git")
    } else if (topics[0] === 'JavaScript') {
     console.log("let study JavaScript")
    } else {   
    console.log('Please try gaine !');
    }
}
listTopics();
selectTopic();