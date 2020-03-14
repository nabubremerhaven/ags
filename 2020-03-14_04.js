pflanzen0301 = ["pflanzen0301", "Pflanzen-AG: Salzwiesen", "Mittwoch, 25.03.",
         "Thema: Salzwiesen",
         "", "", "18:30", ""]
         
vogel0301 = ["vogel0301", "Vogel-AG: Polder Bramel", "Donnerstag, 12.03.",
         "Thema: Vogelbeobachtungen am Polder Bramel",
         "", "", "17:45", "<a href='https://www.google.com/maps/place/53%C2%B033'32.3%22N+8%C2%B042'56.6%22E/@53.5577007,8.7119651,15z/'>Beobachtungsturm am Polder Bramel, Schiffdorf-Bramel</a>"]

events = [pflanzen0301, vogel0301]

for (let i of events) {
    for (j = 0, len = i.length; j < len; j++) {document.getElementById(i[0]).getElementsByTagName("p")[j].innerHTML=i[j]}}
