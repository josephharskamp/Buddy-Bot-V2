const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meow')
        .setDescription('Replies With a Cat!'),
    async execute(interaction) {
    	let catString  = `
		https://cdn.pixabay.com/photo/2014/07/24/18/40/cat-401124__480.jpg
		https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__480.jpg
		https://cdn.pixabay.com/photo/2015/02/14/10/16/cat-636172__480.jpg
		https://cdn.pixabay.com/photo/2013/10/28/14/30/cat-201855__480.jpg
		https://cdn.pixabay.com/photo/2015/04/16/15/21/cat-725793__480.jpg
		https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519__480.jpg
		https://cdn.pixabay.com/photo/2017/05/31/21/52/cat-2361787__480.jpg
		https://cdn.pixabay.com/photo/2014/10/01/10/46/cat-468232__480.jpg
		https://cdn.pixabay.com/photo/2014/04/29/13/19/cat-334383__480.jpg
		https://cdn.pixabay.com/photo/2014/01/17/14/53/cat-246933__480.jpg
		https://cdn.pixabay.com/photo/2017/05/31/21/46/cats-2361762__480.jpg
		https://cdn.pixabay.com/photo/2017/05/21/22/06/cat-2332444__480.jpg
		https://cdn.pixabay.com/photo/2014/03/30/23/35/cat-301720__480.jpg
		https://cdn.pixabay.com/photo/2017/05/21/22/07/cat-2332451__480.jpg
		https://cdn.pixabay.com/photo/2014/08/03/00/51/kitten-408798__480.jpg
		https://cdn.pixabay.com/photo/2017/05/11/07/27/cat-2303146__480.jpg
		https://cdn.pixabay.com/photo/2014/03/30/23/49/cat-301723__480.jpg
		https://cdn.pixabay.com/photo/2013/07/18/20/27/cat-165068__480.jpg
		https://cdn.pixabay.com/photo/2017/05/25/07/40/cat-2342562__480.jpg
		https://cdn.pixabay.com/photo/2017/05/30/22/27/british-shorthair-2358404__480.jpg
		https://cdn.pixabay.com/photo/2012/02/27/16/57/animal-17430__480.jpg
		https://cdn.pixabay.com/photo/2017/04/06/15/15/cat-2208535__480.jpg
		https://cdn.pixabay.com/photo/2017/05/18/10/57/cat-2323258__480.jpg
		https://cdn.pixabay.com/photo/2016/11/18/21/26/cat-1836936__480.jpg
		https://cdn.pixabay.com/photo/2017/03/19/22/09/cat-2157747__480.jpg
		https://cdn.pixabay.com/photo/2017/04/21/13/24/red-headed-cat-2248705__480.jpg
		https://cdn.pixabay.com/photo/2017/04/10/18/52/cat-2219427__480.jpg
		https://cdn.pixabay.com/photo/2017/05/22/20/54/rest-2335341__480.jpg
		https://cdn.pixabay.com/photo/2017/05/13/09/46/cat-2309126__480.jpg
		https://cdn.pixabay.com/photo/2017/05/13/20/53/cat-2310623__480.jpg
https://cdn.pixabay.com/photo/2017/03/30/14/14/cat-2188612__480.jpg
https://cdn.pixabay.com/photo/2017/05/30/14/57/hunter-2357204__480.jpg
https://cdn.pixabay.com/photo/2017/05/12/06/00/cat-2306185__480.jpg
https://cdn.pixabay.com/photo/2017/05/23/21/31/cat-2338666__480.jpg
https://cdn.pixabay.com/photo/2017/05/03/05/25/cat-2280148__480.jpg
https://cdn.pixabay.com/photo/2017/04/08/13/53/cat-2213342__480.jpg
https://cdn.pixabay.com/photo/2017/03/22/00/13/cat-2163594__480.jpg
https://cdn.pixabay.com/photo/2017/05/13/21/14/british-shorthair-2310671__480.jpg
https://cdn.pixabay.com/photo/2017/02/27/09/09/cat-2102418__480.jpg
https://cdn.pixabay.com/photo/2017/03/05/16/21/cat-2118990__480.jpg
https://cdn.pixabay.com/photo/2017/05/26/15/25/cat-2346301__480.jpg
https://cdn.pixabay.com/photo/2017/02/12/11/52/cat-house-physician-2059812__480.jpg
https://cdn.pixabay.com/photo/2017/04/14/19/56/british-shorthair-2231188__480.jpg
https://cdn.pixabay.com/photo/2017/04/27/08/26/animal-2264818__480.jpg
https://cdn.pixabay.com/photo/2017/05/21/16/36/cat-2331692__480.jpg
https://cdn.pixabay.com/photo/2017/03/12/19/09/cat-2137810__480.jpg
https://cdn.pixabay.com/photo/2017/03/16/18/36/summer-2149911__480.jpg
https://cdn.pixabay.com/photo/2017/04/06/19/16/cat-2209109__480.jpg
https://cdn.pixabay.com/photo/2017/04/05/10/31/cat-baby-2204590__480.jpg
https://cdn.pixabay.com/photo/2017/02/24/17/10/chartreux-2095661__480.jpg
https://cdn.pixabay.com/photo/2017/05/13/07/18/cat-2308849__480.jpg
https://cdn.pixabay.com/photo/2017/05/18/11/21/cat-2323326__480.jpg
https://cdn.pixabay.com/photo/2017/03/06/09/16/cat-2120915__480.jpg
https://cdn.pixabay.com/photo/2017/05/23/09/01/cat-2336605__480.jpg
https://cdn.pixabay.com/photo/2016/11/21/12/52/animal-1845248__480.jpg
https://cdn.pixabay.com/photo/2017/04/07/18/37/cat-2211609__480.jpg
https://cdn.pixabay.com/photo/2016/03/09/15/27/cat-1246659__480.jpg
https://cdn.pixabay.com/photo/2017/05/10/14/46/cat-2301015__480.jpg
https://cdn.pixabay.com/photo/2016/02/19/10/05/cat-1209067__480.jpg
https://cdn.pixabay.com/photo/2017/05/13/09/47/cat-2309127__480.jpg
https://cdn.pixabay.com/photo/2017/05/22/07/40/cat-2333413__480.jpg
https://cdn.pixabay.com/photo/2017/03/12/01/29/cats-2136245__480.jpg
https://cdn.pixabay.com/photo/2017/05/29/10/30/kitten-2353403__480.jpg
https://cdn.pixabay.com/photo/2017/05/15/09/59/cat-2314326__480.jpg
https://cdn.pixabay.com/photo/2016/11/07/22/49/kitten-1807071__480.jpg
https://cdn.pixabay.com/photo/2017/02/13/14/47/cat-2062790__480.jpg
https://cdn.pixabay.com/photo/2016/12/16/20/44/cat-1912330__480.jpg
https://cdn.pixabay.com/photo/2016/11/06/19/42/cat-1803904__480.jpg
https://cdn.pixabay.com/photo/2016/11/15/12/36/cat-1826117__480.jpg
https://cdn.pixabay.com/photo/2016/03/27/16/55/cats-1283110__480.jpg
https://cdn.pixabay.com/photo/2016/08/30/18/15/cat-1631648__480.jpg
https://cdn.pixabay.com/photo/2017/06/11/11/14/cat-2392058__480.jpg
https://cdn.pixabay.com/photo/2017/01/07/14/33/cat-1960537__480.jpg
https://cdn.pixabay.com/photo/2016/10/16/10/00/cat-1744750__480.jpg
https://cdn.pixabay.com/photo/2017/02/26/14/12/cat-2100306__480.jpg
https://cdn.pixabay.com/photo/2017/05/05/21/51/cat-2288326__480.jpg
https://cdn.pixabay.com/photo/2017/05/26/15/25/cat-2346303__480.jpg
https://cdn.pixabay.com/photo/2016/09/16/19/47/cat-1674990__480.jpg
https://cdn.pixabay.com/photo/2016/10/16/10/00/cat-1744749__480.jpg
https://cdn.pixabay.com/photo/2017/02/03/09/26/cat-2034833__480.jpg
https://cdn.pixabay.com/photo/2016/10/20/05/50/cat-1754702__480.jpg
https://cdn.pixabay.com/photo/2016/11/21/11/41/animal-1844835__480.jpg
https://cdn.pixabay.com/photo/2017/03/05/18/05/cat-2119283__480.jpg
https://cdn.pixabay.com/photo/2017/02/02/18/18/cat-2033451__480.jpg
https://cdn.pixabay.com/photo/2016/12/13/19/12/cat-1904907__480.jpg
https://cdn.pixabay.com/photo/2016/12/23/15/58/cat-1927512__480.jpg
https://cdn.pixabay.com/photo/2016/12/11/02/41/cat-1898659__480.jpg
https://cdn.pixabay.com/photo/2016/08/16/14/40/cat-1598113__480.jpg
https://cdn.pixabay.com/photo/2016/07/13/10/34/cat-1514076__480.jpg
https://cdn.pixabay.com/photo/2016/12/30/17/27/cat-1941089__480.jpg
https://cdn.pixabay.com/photo/2016/05/17/17/16/cat-1398627__480.jpg
https://cdn.pixabay.com/photo/2016/09/18/12/29/cat-1678009__480.jpg
https://cdn.pixabay.com/photo/2016/12/11/02/51/cat-1898678__480.jpg
https://cdn.pixabay.com/photo/2017/02/23/16/26/cat-2092580__480.jpg
https://cdn.pixabay.com/photo/2016/07/06/13/28/cat-1500498__480.jpg
https://cdn.pixabay.com/photo/2016/10/18/13/44/cat-1750241__480.jpg
https://cdn.pixabay.com/photo/2017/03/19/20/28/cat-2157497__480.jpg
https://cdn.pixabay.com/photo/2017/03/14/19/15/cat-2144133__480.jpg
https://cdn.pixabay.com/photo/2017/03/19/22/11/cat-2157750__480.jpg
https://cdn.pixabay.com/photo/2016/10/11/04/25/cat-1730517__480.jpg
https://cdn.pixabay.com/photo/2017/02/23/15/06/cat-2092428__480.jpg
https://cdn.pixabay.com/photo/2017/03/29/15/59/small-cat-2185670__480.jpg
https://cdn.pixabay.com/photo/2017/03/05/20/08/baby-cat-2119703__480.jpg
https://cdn.pixabay.com/photo/2016/12/11/02/28/cat-1898625__480.jpg
https://cdn.pixabay.com/photo/2016/08/13/21/33/cat-1591598__480.jpg
https://cdn.pixabay.com/photo/2016/12/11/10/34/cat-1899127__480.jpg
https://cdn.pixabay.com/photo/2016/12/01/13/23/cat-1875282__480.jpg
https://cdn.pixabay.com/photo/2017/01/31/19/04/cat-2026479__480.jpg
https://cdn.pixabay.com/photo/2016/12/11/02/45/cat-1898667__480.jpg
https://cdn.pixabay.com/photo/2016/08/12/18/34/cat-1589369__480.jpg
https://cdn.pixabay.com/photo/2016/12/10/13/00/cat-1897224__480.jpg
https://cdn.pixabay.com/photo/2016/11/28/15/23/cat-1865263__480.jpg
https://cdn.pixabay.com/photo/2016/10/05/15/58/cats-1716984__480.jpg
https://cdn.pixabay.com/photo/2016/12/11/00/41/cat-1898510__480.jpg
https://cdn.pixabay.com/photo/2016/08/13/21/53/cat-1591636__480.jpg
https://cdn.pixabay.com/photo/2016/12/11/00/36/cat-1898497__480.jpg
https://cdn.pixabay.com/photo/2016/12/07/22/47/cat-1890583__480.jpg
https://cdn.pixabay.com/photo/2017/01/21/18/15/cat-1997911__480.jpg
https://cdn.pixabay.com/photo/2016/09/20/20/47/cat-1683387__480.jpg
https://cdn.pixabay.com/photo/2016/09/16/12/42/cat-1673924__480.jpg
https://cdn.pixabay.com/photo/2016/06/27/10/53/cat-1482258__480.jpg
https://cdn.pixabay.com/photo/2017/03/05/20/16/baby-cat-2119755__480.jpg
https://cdn.pixabay.com/photo/2016/12/11/02/55/cat-1898683__480.jpg
https://cdn.pixabay.com/photo/2017/03/27/21/31/cat-2180331__480.jpg
https://cdn.pixabay.com/photo/2016/09/16/17/25/cat-1674617__480.jpg
https://cdn.pixabay.com/photo/2016/09/17/00/53/cat-1675428__480.jpg
https://cdn.pixabay.com/photo/2016/11/07/10/03/cat-1805310__480.jpg
https://cdn.pixabay.com/photo/2016/05/19/21/04/cat-1403948__480.jpg
https://cdn.pixabay.com/photo/2016/05/19/21/18/cat-1403970__480.jpg
https://cdn.pixabay.com/photo/2016/07/08/13/10/cat-1504307__480.jpg
https://cdn.pixabay.com/photo/2016/11/07/14/36/cat-1805964__480.jpg
https://cdn.pixabay.com/photo/2016/12/18/18/42/kittens-1916542__480.jpg
https://cdn.pixabay.com/photo/2016/03/27/19/45/animal-1283955__480.jpg
https://cdn.pixabay.com/photo/2016/02/12/15/21/cat-1196242__480.jpg
https://cdn.pixabay.com/photo/2016/09/24/22/20/cat-1692702__480.jpg
https://cdn.pixabay.com/photo/2017/01/07/13/42/nature-1960387__480.jpg
https://cdn.pixabay.com/photo/2016/09/24/23/26/cat-1692815__480.jpg
https://cdn.pixabay.com/photo/2016/12/11/00/39/cat-1898503__480.jpg
https://cdn.pixabay.com/photo/2016/08/23/23/08/cat-1615778__480.jpg
https://cdn.pixabay.com/photo/2016/10/18/16/02/natural-1750606__480.jpg
https://cdn.pixabay.com/photo/2017/02/11/22/47/cat-2058900__480.jpg
https://cdn.pixabay.com/photo/2016/08/23/23/29/cat-1615825__480.jpg
https://cdn.pixabay.com/photo/2016/09/17/00/51/cat-1675427__480.jpg
https://cdn.pixabay.com/photo/2016/04/18/17/58/cat-1337040__480.jpg
https://cdn.pixabay.com/photo/2017/01/02/19/19/cat-1947715__480.jpg
https://cdn.pixabay.com/photo/2016/11/12/20/29/cat-1819685__480.jpg
https://cdn.pixabay.com/photo/2016/03/29/13/12/cat-1288218__480.jpg
https://cdn.pixabay.com/photo/2016/08/13/21/37/cat-1591612__480.jpg
https://cdn.pixabay.com/photo/2016/08/12/18/36/cat-1589373__480.jpg
https://cdn.pixabay.com/photo/2016/06/16/14/10/cat-1461375__480.jpg
https://cdn.pixabay.com/photo/2016/07/13/17/40/pet-1515038__480.jpg
https://cdn.pixabay.com/photo/2016/09/25/14/40/cat-1693837__480.jpg
https://cdn.pixabay.com/photo/2017/01/13/22/04/cat-1978346__480.jpg
https://cdn.pixabay.com/photo/2016/12/16/15/03/cat-1911571__480.jpg
https://cdn.pixabay.com/photo/2016/07/17/17/46/cat-1524308__480.jpg
https://cdn.pixabay.com/photo/2017/01/29/21/39/cat-2019457__480.jpg
https://cdn.pixabay.com/photo/2016/08/11/07/41/cat-1584966__480.jpg
https://cdn.pixabay.com/photo/2016/08/24/14/55/cat-1617155__480.jpg
https://cdn.pixabay.com/photo/2016/06/15/17/58/cat-1459525__480.jpg
https://cdn.pixabay.com/photo/2016/08/16/14/42/cat-1598115__480.jpg
https://cdn.pixabay.com/photo/2017/06/03/19/06/pet-2369442__480.jpg
https://cdn.pixabay.com/photo/2015/07/02/00/36/cat-828238__480.jpg
https://cdn.pixabay.com/photo/2017/05/18/08/17/cat-2322898__480.jpg
https://cdn.pixabay.com/photo/2017/03/04/14/18/cat-2116168__480.jpg
https://cdn.pixabay.com/photo/2016/10/06/11/24/cat-1718842__480.jpg
https://cdn.pixabay.com/photo/2016/07/09/09/02/cat-1505941__480.jpg
https://cdn.pixabay.com/photo/2016/08/23/23/08/cat-1615779__480.jpg
https://cdn.pixabay.com/photo/2016/12/10/13/03/cat-1897233__480.jpg
https://cdn.pixabay.com/photo/2016/09/01/11/09/cat-1635847__480.jpg
https://cdn.pixabay.com/photo/2017/05/31/16/30/cat-2360874__480.jpg
https://cdn.pixabay.com/photo/2017/05/16/21/54/pet-2319130__480.jpg
https://cdn.pixabay.com/photo/2016/02/06/15/35/cat-1183083__480.jpg
https://cdn.pixabay.com/photo/2016/10/05/18/03/cat-1717252__480.jpg
https://cdn.pixabay.com/photo/2015/12/08/17/26/kitten-1083356__480.jpg
https://cdn.pixabay.com/photo/2016/01/17/11/35/cat-1144740__480.jpg
https://cdn.pixabay.com/photo/2016/07/21/18/54/fear-1533284__480.jpg
https://cdn.pixabay.com/photo/2017/01/27/19/21/british-shorthair-2014007__480.jpg
https://cdn.pixabay.com/photo/2015/08/27/21/00/cat-911125__480.jpg
https://cdn.pixabay.com/photo/2016/05/01/22/29/cat-1366123__480.jpg
https://cdn.pixabay.com/photo/2016/02/06/15/41/cat-1183091__480.jpg
https://cdn.pixabay.com/photo/2016/02/12/16/38/cat-1196363__480.jpg
https://cdn.pixabay.com/photo/2017/02/22/15/37/cat-2089715__480.jpg
https://cdn.pixabay.com/photo/2017/02/24/17/00/chartreux-2095641__480.jpg
https://cdn.pixabay.com/photo/2016/12/27/15/11/kitten-1934096__480.jpg
https://cdn.pixabay.com/photo/2017/03/05/12/08/white-2118474__480.jpg
https://cdn.pixabay.com/photo/2016/03/29/15/59/cat-1288531__480.jpg
https://cdn.pixabay.com/photo/2016/07/28/07/11/cat-1547144__480.jpg
https://cdn.pixabay.com/photo/2015/12/17/02/29/cat-1096821__480.jpg
https://cdn.pixabay.com/photo/2015/12/03/12/26/cat-1074840__480.jpg
https://cdn.pixabay.com/photo/2017/01/29/17/21/sleeping-cat-2018788__480.jpg
https://cdn.pixabay.com/photo/2015/07/31/15/00/cat-869201__480.jpg
https://cdn.pixabay.com/photo/2015/07/28/18/47/cat-864748__480.jpg
https://cdn.pixabay.com/photo/2016/10/20/08/36/cat-1754897__480.jpg
https://cdn.pixabay.com/photo/2016/08/08/17/38/cat-1578865__480.jpg
https://cdn.pixabay.com/photo/2015/11/12/20/32/cats-1040954__480.jpg
https://cdn.pixabay.com/photo/2016/01/28/12/16/cat-1166174__480.jpg
https://cdn.pixabay.com/photo/2016/09/18/20/07/cat-1678884__480.jpg
https://cdn.pixabay.com/photo/2015/11/16/21/57/cat-1046497__480.jpg
https://cdn.pixabay.com/photo/2016/08/16/14/48/cat-1598126__480.jpg
https://cdn.pixabay.com/photo/2017/02/16/20/02/cat-2072339__480.jpg
https://cdn.pixabay.com/photo/2015/12/08/14/19/cat-1083000__480.jpg
https://cdn.pixabay.com/photo/2016/02/07/15/00/cat-1184916__480.jpg
https://cdn.pixabay.com/photo/2016/01/05/19/11/cat-1123124__480.jpg
https://cdn.pixabay.com/photo/2016/05/01/19/38/cat-1365643__480.jpg
https://cdn.pixabay.com/photo/2016/07/17/14/50/cat-1523929__480.jpg
https://cdn.pixabay.com/photo/2016/05/08/01/24/cat-1378520__480.jpg
https://cdn.pixabay.com/photo/2016/05/26/20/09/cat-1418261__480.jpg
https://cdn.pixabay.com/photo/2015/12/08/17/48/cat-1083393__480.jpg
https://cdn.pixabay.com/photo/2016/04/14/19/56/cat-1329622__480.jpg
https://cdn.pixabay.com/photo/2016/11/29/07/38/adorable-1868150__480.jpg
https://cdn.pixabay.com/photo/2015/09/08/18/59/cat-930534__480.jpg
https://cdn.pixabay.com/photo/2016/01/24/19/56/cat-1159540__480.jpg
https://cdn.pixabay.com/photo/2016/03/23/17/32/cat-1275191__480.jpg
https://cdn.pixabay.com/photo/2015/09/20/15/15/cat-948423__480.jpg
https://cdn.pixabay.com/photo/2016/04/14/18/43/cat-1329441__480.jpg
https://cdn.pixabay.com/photo/2015/03/18/15/14/cat-679425__480.jpg
https://cdn.pixabay.com/photo/2016/12/15/23/24/cat-1910266__480.jpg
https://cdn.pixabay.com/photo/2017/06/15/19/47/cat-2406499__480.jpg
https://cdn.pixabay.com/photo/2015/11/15/20/24/cat-1044759__480.jpg
https://cdn.pixabay.com/photo/2016/08/25/18/20/cat-1620296__480.jpg
https://cdn.pixabay.com/photo/2015/11/06/15/40/cat-1029087__480.jpg
https://cdn.pixabay.com/photo/2016/05/07/21/06/cat-1378201__480.jpg
https://cdn.pixabay.com/photo/2016/07/26/13/53/cat-1542857__480.jpg
https://cdn.pixabay.com/photo/2015/11/03/23/23/cat-1021602__480.jpg
https://cdn.pixabay.com/photo/2015/03/26/09/56/cat-690613__480.jpg
https://cdn.pixabay.com/photo/2016/03/14/20/21/kitten-1256216__480.jpg
https://cdn.pixabay.com/photo/2015/11/01/19/42/cat-1017455__480.jpg
https://cdn.pixabay.com/photo/2015/10/19/13/09/young-cat-995956__480.jpg
https://cdn.pixabay.com/photo/2016/02/07/14/03/cat-1184747__480.jpg
https://cdn.pixabay.com/photo/2016/07/11/12/25/cat-1509583__480.jpg
https://cdn.pixabay.com/photo/2016/02/19/09/23/cat-1208988__480.jpg
https://cdn.pixabay.com/photo/2016/07/23/00/34/cat-1536107__480.jpg
https://cdn.pixabay.com/photo/2016/02/23/12/01/cat-1217434__480.jpg
https://cdn.pixabay.com/photo/2015/12/27/10/54/pet-1109666__480.jpg
https://cdn.pixabay.com/photo/2016/08/05/18/27/cat-1572896__480.jpg
https://cdn.pixabay.com/photo/2016/01/20/04/54/animals-1150920__480.jpg
https://cdn.pixabay.com/photo/2015/04/23/19/57/cat-736561__480.jpg
https://cdn.pixabay.com/photo/2016/05/09/17/54/wildcat-1382136__480.jpg
https://cdn.pixabay.com/photo/2015/01/11/16/41/cat-596418__480.jpg
https://cdn.pixabay.com/photo/2015/06/01/23/33/cat-794452__480.jpg
https://cdn.pixabay.com/photo/2015/05/14/11/23/cat-766643__480.jpg
https://cdn.pixabay.com/photo/2016/05/07/20/49/cat-1378185__480.jpg
https://cdn.pixabay.com/photo/2015/11/12/20/32/kitten-1040955__480.jpg
https://cdn.pixabay.com/photo/2016/08/29/14/43/cat-1628424__480.jpg
https://cdn.pixabay.com/photo/2015/11/05/01/22/cat-1023576__480.jpg
https://cdn.pixabay.com/photo/2016/12/09/16/11/cat-1895171__480.jpg
https://cdn.pixabay.com/photo/2016/10/04/10/18/cat-1713960__480.jpg
https://cdn.pixabay.com/photo/2016/11/09/20/34/kittens-1812641__480.jpg
https://cdn.pixabay.com/photo/2016/05/29/10/20/cat-1422703__480.jpg
https://cdn.pixabay.com/photo/2016/01/08/22/11/cat-1129372__480.jpg
https://cdn.pixabay.com/photo/2014/02/25/17/41/cat-274443__480.jpg
https://cdn.pixabay.com/photo/2016/07/28/17/26/cat-1548585__480.jpg
https://cdn.pixabay.com/photo/2016/04/10/15/32/black-1320161__480.jpg
https://cdn.pixabay.com/photo/2016/03/18/01/47/pet-1264258__480.jpg
https://cdn.pixabay.com/photo/2016/05/22/22/52/cat-1409382__480.jpg
https://cdn.pixabay.com/photo/2016/05/04/09/57/cat-1371107__480.jpg
https://cdn.pixabay.com/photo/2016/08/20/14/49/cat-1607652__480.jpg
https://cdn.pixabay.com/photo/2016/02/07/15/44/cat-1185006__480.jpg
https://cdn.pixabay.com/photo/2016/09/04/17/07/cat-1644545__480.jpg
https://cdn.pixabay.com/photo/2016/05/07/21/07/cat-1378203__480.jpg
https://cdn.pixabay.com/photo/2016/09/26/15/27/cat-1696199__480.jpg
https://www.youtube.com/watch?v=j5a0jTc9S10&start=0&autoplay=1
https://cdn.pixabay.com/photo/2014/12/16/15/41/cat-570459__480.jpg
https://cdn.pixabay.com/photo/2015/03/09/07/23/cat-665134__480.jpg
https://cdn.pixabay.com/photo/2015/12/06/14/59/cat-1079556__480.jpg
https://cdn.pixabay.com/photo/2016/09/04/22/38/cat-1645479__480.jpg
https://cdn.pixabay.com/photo/2016/10/10/19/37/cat-1729674__480.jpg
https://cdn.pixabay.com/photo/2016/08/23/13/25/cat-1614345__480.jpg
https://cdn.pixabay.com/photo/2015/12/19/12/57/cat-1099730__480.jpg
https://cdn.pixabay.com/photo/2015/02/11/12/14/cat-632335__480.jpg
https://cdn.pixabay.com/photo/2016/09/02/21/28/cat-1640263__480.jpg
https://cdn.pixabay.com/photo/2015/07/31/15/01/cat-869218__480.jpg
https://cdn.pixabay.com/photo/2015/12/06/15/14/cat-1079583__480.jpg
https://cdn.pixabay.com/photo/2015/04/13/22/05/cat-721357__480.jpg
https://cdn.pixabay.com/photo/2016/06/19/11/14/cat-1466474__480.jpg
https://cdn.pixabay.com/photo/2016/05/17/03/27/cat-1397342__480.jpg
https://cdn.pixabay.com/photo/2015/11/08/18/05/cat-1034034__480.jpg
https://cdn.pixabay.com/photo/2016/08/10/22/58/cat-1584537__480.jpg
https://cdn.pixabay.com/photo/2015/03/09/07/23/young-cat-665133__480.jpg
https://cdn.pixabay.com/photo/2014/11/11/20/50/cat-527418__480.jpg
https://cdn.pixabay.com/photo/2015/10/29/05/40/cat-1011739__480.jpg
https://cdn.pixabay.com/photo/2015/11/15/20/27/cat-1044768__480.jpg`
	
		
		let catList = catString.split('\n');
		
		catList = catList[Math.floor(Math.random() * catList.length)];
       
		console.log(catList)
		await interaction.reply('Meow')
        await interaction.editReply(catList);
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
    },
};