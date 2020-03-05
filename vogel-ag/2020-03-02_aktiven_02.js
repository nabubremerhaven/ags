ev0301 = ["ev0301", "AG-Treffen: Polder Bramel", "Donnerstag, 12.03.",
         "Thema: Vogelbeobachtungen am Polder Bramel",
         "Vogel-AG", "", "17:45", "Beobachtungsturm am Polder Bramel, Schiffdorf-Bramel", "", ""]

events = [ev0301]

for (let i of events) {
    for (j = 0, len = i.length; j < len; j++) {
        if (j < len - 1) {document.getElementById(i[0]).getElementsByTagName("p")[j].innerHTML=i[j]}
        else {document.getElementById(i[0]).getElementsByTagName("img")[0].src=i[j]}}}
