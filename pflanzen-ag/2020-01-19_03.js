ev0201 = ["ev0201", "AG-Treffen: Salzwiesen", "Mittwoch, 26.02.",
         "Thema: Salzwiesen",
         "Pflanzen-AG", "", "18:30", "", "Deichvorland (Foto: Witt)", "https://i.imgur.com/G6YVdg5.jpg"]

ev0301 = ["ev0301", "AG-Treffen: Salzwiesen", "Mittwoch, 25.03.",
         "Thema: Salzwiesen",
         "Pflanzen-AG", "", "18:30", "", "Deichvorland (Foto: Witt)", "https://i.imgur.com/G6YVdg5.jpg"]

ev0401 = ["ev0401", "AG-Treffen: Frühblüher im Bürgerpark", "Mittwoch, 29.04.",
         "Themen: Frühblüher im Bürgerpark, Planung der Quartalsaktivitäten.",
         "Pflanzen-AG", "", "18:30", "Bürgerpark, Parkeingang Bismarckstraße, Bremerhaven", "Krokusse (Foto: Witt)", "https://i.imgur.com/TyAKRV2.jpg"]

ev0501 = ["ev0501", "AG-Treffen: Imsumer Salzwiesen & Ochsenturm", "Mittwoch, 13.05.",
         "Thema: Imsumer Salzwiesen & Ochsenturm",
         "Pflanzen-AG", "", "18:30", "Ochsenturm, Beim Ochsentum, Geestland-Imsum", "Deichvorland (Foto: Witt)", "https://i.imgur.com/G6YVdg5.jpg"]

ev0601 = ["ev0601", "AG-Treffen: Imsumer Salzwiesen & Ochsenturm", "Mittwoch, 24.06.",
         "Thema: Imsumer Salzwiesen & Ochsenturm",
         "Pflanzen-AG", "", "18:30", "Ochsenturm, Beim Ochsentum, Geestland-Imsum", "Deichvorland (Foto: Witt)", "https://i.imgur.com/G6YVdg5.jpg"]

ev0602 = ["ev0602", "Führung: Imsumer Salzwiesen & Ochsenturm", "Sonntag, 28.06.",
         "Thema: Imsumer Salzwiesen & Ochsenturm",
         "Pflanzen-AG", "", "14:00", "Ochsenturm, Beim Ochsentum, Geestland-Imsum", "Deichvorland (Foto: Witt)", "https://i.imgur.com/G6YVdg5.jpg"]

events = [ev0201, ev0301, ev0401, ev0501, ev0601, ev0602]

for (let i of events) {
    for (j = 0, len = i.length; j < len; j++) {
        if (j < len - 1) {document.getElementById(i[0]).getElementsByTagName("p")[j].innerHTML=i[j]}
        else {document.getElementById(i[0]).getElementsByTagName("img")[0].src=i[j]}}}
