let aStoryImg = ["assets/lioness-1634673_640.jpg", "assets/meerkat-348403_640.jpg",
    "assets/porcupine-3636019_640.jpg", "assets/prairie-dog-2661307_640.jpg", "assets/wolf-5185817_640.jpg"];

let aStoryTxt = [
    "Unsere Löwin Nala ist ein echtes Kraftpaket mit sanftem Blick. Sie verbringt ihre Tage gern entspannt auf ihrem Aussichtspunkt, wo sie ihre Umgebung im Blick behält. Besucher spüren oft sofort: Hier ruht eine Königin – selbstbewusst, stolz und gelassen.", 
    "Wenn die letzten Sonnenstrahlen den Park in warmes Licht tauchen, legen sich viele Tiere entspannt zur Ruhe. Besonders schön ist es, dabei zuzusehen, wie Zebras, Antilopen oder Erdmännchen gemeinsam dösen – friedlich, ruhig und im Einklang mit dem Rhythmus der Natur.", 
    "Unsere Stachelschweine werden mit Einbruch der Dämmerung langsam ruhiger. Sie ziehen sich in ihre Höhlen zurück, wo sie sich sicher fühlen. Dabei hört man manchmal leises Rascheln, wenn sie sich ein gemütliches Nest aus Heu zusammenbauen – bereit für eine ruhige Nacht.",
    "Präriehunde sind unglaublich soziale Tiere. Sie leben in kleinen Kolonien, bauen unterirdische Gänge und kommunizieren mit einer Vielzahl von Lauten. Bei uns genießen sie ihren Lebensraum mit viel Platz zum Buddeln, Sonnen und Spielen – und manchmal scheinen sie sogar zu lächeln.", 
    "Unser Wolfsrudel lebt in einem weitläufigen, naturnahen Gehege mit Waldstücken, Verstecken und Freiflächen. Die Tiere können sich aus dem Blickfeld zurückziehen oder gemeinsam auf Entdeckungstour gehen – genau so, wie es ihrem natürlichen Verhalten entspricht. Ein echtes Herzensprojekt für unser Team."
]
let storyIndex = 0;

function storytellNext() {
    storyIndex = (storyIndex + 1) % aStoryImg.length;
    document.querySelector("#storytellImg").src = aStoryImg[storyIndex];
    document.querySelector("#storytellText p").innerHTML = aStoryTxt[storyIndex];
} 
