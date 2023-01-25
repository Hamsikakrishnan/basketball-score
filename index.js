let score1 = document.getElementById("score-1")
let score2 = document.getElementById("score-2")
let resultEl = document.getElementById("result")
let count1 = 0;
let count2 = 0;
function lead(){
    if(count1 > count2){
        resultEl.textContent = "Team-1 is in Lead"
    }
    else if(count1 == 0 && count2 == 0){
        resultEl.textContent = "Both Teams have 0 points"
    }
    else if(count1 == count2){
        resultEl.textContent = "Both Teams have Equal score"
    }
    
    else if(count1 < count2){
        resultEl.textContent = "Team-2 is in lead"
    }
}
function s11(){
    count1+= 1
    score1.textContent = count1
    lead()
}
function s12(){
    count1+= 2
    score1.textContent = count1
    lead()
}
function s13(){
    count1+= 3
    score1.textContent = count1
    lead()
}
function s1r(){
    count1 = 0
    score1.textContent = count1
    lead()
    
}
function s21(){
    count2 += 1
    score2.textContent = count2
    lead()
}
function s22(){
    count2 += 2
    score2.textContent = count2
    lead()
}
function s23(){
    count2 += 3
    score2.textContent = count2
    lead()
}
function s2r(){
    count2 = 0
    score2.textContent = count2
    lead()
}