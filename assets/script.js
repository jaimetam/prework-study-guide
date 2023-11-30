var topics = ['HTML','CSS','Git','JavaScript'];

function listTopics(){
    for ( var x = 0; x < topics.length; x++ ) {
        console.log(topix[x]);
    }
}

function selectTopic() {
    if ( topics === 'HTML'){
        console.log ("Let's study HTML!");
    } else if (topics === 'CSS'){
        console.log ("Let's study CSS!")
    } else if (topics === 'Git'){
        console.log("Let's study Git")
    } else if (topics === 'JavaScript') {
     console.log("let study JavaScript")
    } else {   
    console.log('Please try gaine !');
    }
    
}
listTopics();