pflanzen0301 = ["ev0301", "AG-Treffen: Salzwiesen", "Mittwoch, 25.03.",
         "Thema: Salzwiesen",
         "Pflanzen-AG", "", "18:30", ""]
         
vogel0301 = ["ev0301", "AG-Treffen: Polder Bramel", "Donnerstag, 12.03.",
         "Thema: Vogelbeobachtungen am Polder Bramel",
         "Vogel-AG", "", "17:45", "Beobachtungsturm am Polder Bramel, Schiffdorf-Bramel"]

events = [pflanzen0301, vogel0301]

for (let i of events) {
    for (j = 0, len = i.length; j < len; j++) {
        document.getElementById(i[0]).getElementsByTagName("p")[j].innerHTML=i[j]}
