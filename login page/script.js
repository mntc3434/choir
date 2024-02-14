function showNextPage() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('nextPage').classList.remove('hidden');
}

function generateQuote() {
  const quotes = [
    "ምስጋና የሚሠዋ ያከብረኛል፤ የእግዚአብሔርን ማዳን ለእርሱ የማሳይበት መንገድ ከዚያ አለ።    መዝሙረ ዳዊት 50:23",
    "በጸሎትና በልመናም ሁሉ ዘወትር በመንፈስ ጸልዩ፤ በዚህም አሳብ ስለ ቅዱሳን ሁሉ እየለመናችሁ በመጽናት ሁሉ ትጉ፤   ወደ ኤፌሶን ሰዎች 6:18",
    "ነፍሴ ሆይ፥ እግዚአብሔርን ባርኪ፥ አጥንቶቼም ሁሉ፥ የተቀደሰ ስሙን። ነፍሴ ሆይ፥ እግዚአብሔርን ባርኪ፥ ምስጋናውንም ሁሉ አትርሺ፤   መዝሙረ ዳዊት 103:1,2",
    "ከፀሐይ መውጫ ጀምሮ እስከ መግቢያው ድረስ የእግዚአብሔር ስም ይመስገን።    መዝሙረ ዳዊት 113:3",
    "እናንተ ትሹኛላችሁ፥ በፍጹም ልባችሁም ከሻችሁኝ ታገኙኛላችሁ።    ትንቢተ ኤርምያስ 29:13",
    "በእኔ ብትኖሩ ቃሎቼም በእናንተ ቢኖሩ የምትወዱትን ሁሉ ለምኑ ይሆንላችሁማል።   የዮሐንስ ወንጌል 15:7"
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}