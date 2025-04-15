/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.



const fish_data = `Number	Name	Sell	Where/How	Shadow	Total Catches to Unlock	Spawn Rates	Rain/Snow Catch Up	NH Jan	NH Feb	NH Mar	NH Apr	NH May	NH Jun	NH Jul	NH Aug	NH Sep	NH Oct	NH Nov	NH Dec	SH Jan	SH Feb	SH Mar	SH Apr	SH May	SH Jun	SH Jul	SH Aug	SH Sep	SH Oct	SH Nov	SH Dec	Color 1	Color 2	Size	Lighting Type	Icon Filename	Critterpedia Filename	Furniture Filename	Internal ID	Unique Entry ID
56	anchovy	200	Sea	Small	0	2–5	No	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	Blue	Red	1x1	No lighting	Fish81	FishAntyobi	FtrFishAntyobi	4201	LzuWkSQP55uEpRCP5
36	angelfish	3000	River	Small	20	2–5	No	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	Yellow	Black	1x1	Fluorescent	Fish30	FishAngelfish	FtrFishAngelfish	2247	XTCFCk2SiuY5YXLZ7
44	arapaima	10000	River	XX-Large	50	1	Yes	NA	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	NA	NA	NA	NA	4 PM – 9 AM	Black	Blue	3x2	No lighting	Fish36	FishPiraruku	FtrFishPiraruku	2253	mZy4BES54bqwi97br
41	arowana	10000	River	Large	50	1–2	No	NA	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	NA	NA	NA	NA	4 PM – 9 AM	Yellow	Black	2x1	Fluorescent	Fish33	FishArowana	FtrFishArowana	2250	F68AvCaqddBJL7ZSN
58	barred knifejaw	5000	Sea	Medium	20	3–5	No	NA	NA	All day	All day	All day	All day	All day	All day	All day	All day	All day	NA	All day	All day	All day	All day	All day	NA	NA	NA	All day	All day	All day	All day	White	Black	1x1	Fluorescent	Fish47	FishIshidai	FtrFishIshidai	2265	X3R9SFSAaDzBF4fE3
79	barreleye	15000	Sea	Small	100	1	No	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	Black	Black	1x1	Fluorescent	Fish84	FishDemenigisu	FtrFishDemenigisu	4204	BpqTa4zmTjv3Nm4wE
37	betta	2500	River	Small	20	1–4	No	NA	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	NA	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	NA	NA	NA	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	Light blue	Black	1x1	Fluorescent	Fish77	FishBeta	FtrFishBeta	4191	7QcQXzwZoNGiNA94k
1	bitterling	900	River	X-Small	0	12–17	No	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	All day	All day	All day	All day	All day	NA	NA	NA	Light blue	Blue	1x1	No lighting	Fish0	FishTanago	FtrFishTanago	2215	Drj6eLRBgg4T9KhNx
22	black bass	400	River	Large	0	4–12	No	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Green	Black	1x1	Fluorescent	Fish19	FishBlackbass	FtrFishBlackbass	2234	wAZvfTca7GyaTtLcQ
54	blowfish	5000	Sea	Medium	20	5	No	9 PM – 4 AM	9 PM – 4 AM	NA	NA	NA	NA	NA	NA	NA	NA	9 PM – 4 AM	9 PM – 4 AM	NA	NA	NA	NA	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	NA	NA	NA	NA	Beige	Black	1x1	Fluorescent	Fish73	FishFugu	FtrFishFugu	2262	aDsmTcByApycafxTa
67	blue marlin	10000	Pier	XX-Large	50	1–2	Yes	All day	All day	All day	All day	NA	NA	All day	All day	All day	NA	All day	All day	All day	All day	All day	NA	All day	All day	All day	All day	All day	All day	NA	NA	Blue	Black	2x1	Fluorescent	Fish58	FishKajiki	FtrFishKajiki	2275	jhtsYRHydAcZnd6bJ
20	bluegill	180	River	Small	0	6–10	No	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	Blue	Black	1x1	No lighting	Fish17	FishBlueguill	FtrFishBlueguill	2232	8ygccYFCrWf4hwYGR
51	butterfly fish	1000	Sea	Small	0	4–5	No	NA	NA	NA	All day	All day	All day	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	All day	All day	All day	Yellow	Black	1x1	Fluorescent	Fish42	FishChouchouuo	FtrFishChouchouuo	2259	S4rkio2M3WB5cyy8Y
5	carp	300	Pond	Large	0	3–9	No	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Gray	Black	1x1	Fluorescent	Fish5	FishKoi	FtrFishKoi	2219	4DwwvGDwPQvZTn9Fb
18	catfish	800	Pond	Large	0	6–8	No	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	Black	Black	1x1	Fluorescent	Fish14	FishNamazu	FtrFishNamazu	2229	nbPtvwf7HCQxA9Nc4
28	char	3800	River (clifftop)	Medium	20	1–4	No	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	Brown	Black	1x1	Fluorescent	Fish24	FishOoiwana	FtrFishOoiwana	2239	ahbnwCqp3EZXa96KC
27	cherry salmon	1000	River (clifftop)	Medium	0	3–9	No	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	Brown	Black	1x1	Fluorescent	Fish23	FishYamame	FtrFishYamame	2238	sJyBbeLbpzn7LyzFr
49	clown fish	650	Sea	X-Small	0	5–6	No	NA	NA	NA	All day	All day	All day	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	All day	All day	All day	Orange	Black	1x1	Fluorescent	Fish40	FishKumanomi	FtrFishKumanomi	2257	L9qxZaMoBhwxvpMyh
80	coelacanth	15000	Sea (rainy days)	XX-Large	100	1–2	Yes	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Black	Black	2x1	Fluorescent	Fish63	FishSirakansu	FtrFishSirakansu	2284	NjMZQ6Xi9NswEXnHH
11	crawfish	200	Pond	Small	0	4–12	No	NA	NA	NA	All day	All day	All day	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	All day	All day	All day	Red	Black	1x1	Fluorescent	Fish10	FishZarigani	FtrFishZarigani	2223	W7TrwpycmfgniZipi
3	crucian carp	160	River	Small	0	4–12	No	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Brown	Black	1x1	Fluorescent	Fish2	FishFuna	FtrFishFuna	328	Pdw7vmJz9PRM4ggbf
61	dab	300	Sea	Medium	0	11–14	No	All day	All day	All day	All day	NA	NA	NA	NA	NA	All day	All day	All day	NA	NA	NA	All day	All day	All day	All day	All day	All day	All day	NA	NA	Brown	Black	1x1	Fluorescent	Fish50	FishKarei	FtrFishKarei	2268	noA2Kfp8TaFgaLs5n
4	dace	240	River	Medium	0	3–10	No	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	Brown	Black	1x1	Fluorescent	Fish3	FishUgui	FtrFishUgui	2217	dWmXFdnjByWT5nEok
42	dorado	15000	River	X-Large	100	1–2	No	NA	NA	NA	NA	NA	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	NA	NA	NA	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	NA	NA	NA	NA	NA	NA	NA	NA	4 AM – 9 PM	Yellow	Black	2x1	Fluorescent	Fish34	FishDolado	FtrFishDolado	2251	G7ZwD67cRMHBwTSKH
77	football fish	2500	Sea	Large	20	6	No	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	Black	Black	2x1	Emission	Fish56	FishChouchinankou	FtrFishChouchinankou	2273	vQHfve6DygtcYqwdi
16	freshwater goby	400	River	Small	0	2–5	No	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	Brown	Black	1x1	Fluorescent	Fish12	FishDonko	FtrFishDonko	2227	SfXYNdtaid6hdQhvZ
15	frog	120	Pond	Small	0	7–9	No	NA	NA	NA	NA	All day	All day	All day	All day	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	All day	All day	Green	Black	1x1	Fluorescent	Fish11	FishKaeru	FtrFishKaeru	2226	LcQLs85qPPdLajLje
43	gar	6000	Pond	X-Large	50	1–2	No	NA	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	NA	NA	NA	NA	4 PM – 9 AM	Brown	Black	2x1	Fluorescent	Fish35	FishGa	FtrFishGa	2252	x5yAYQgMJW9Kf7WyM
19	giant snakehead	5500	Pond	Large	50	2	No	NA	NA	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	NA	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	NA	NA	NA	NA	NA	NA	NA	NA	NA	9 AM – 4 PM	Black	Black	2x1	Fluorescent	Fish16	FishRaigyo	FtrFishRaigyo	2231	KyWQRd8W2FePM42wB
68	giant trevally	4500	Pier	X-Large	20	1	No	NA	NA	NA	NA	All day	All day	All day	All day	All day	All day	NA	NA	All day	All day	All day	All day	NA	NA	NA	NA	NA	NA	All day	All day	Black	Black	2x1	Fluorescent	Fish70	FishRouninaji	FtrFishGT	2276	53qtm8cMH4RfqJiAH
29	golden trout	15000	River (clifftop)	Medium	100	1	No	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	Brown	Black	1x1	Fluorescent	Fish79	FishGoldenTorauto	FtrFishGoldenTorauto	4193	wwGzR7FzWNJ7cDz9X
7	goldfish	1300	Pond	X-Small	0	1–4	No	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Red	Light blue	1x1	No lighting	Fish7	FishKingyo	FtrFishKingyo	329	5NwmwhEQxBNZCPiBR
74	great white shark	15000	Sea	Large w/Fin	50	2	Yes	NA	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	NA	NA	NA	NA	4 PM – 9 AM	Blue	Blue	3x2	No lighting	Fish62	FishSame	FtrFishSame	2280	EPypAeJGuTDGFJRnx
34	guppy	1300	River	X-Small	0	2–3	No	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	NA	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	Blue	Black	1x1	Fluorescent	Fish29	FishGuppi	FtrFishGuppi	2245	WtdZnARNxnWRobej2
73	hammerhead shark	8000	Sea	Large w/Fin	20	1	Yes	NA	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	NA	NA	NA	NA	4 PM – 9 AM	Black	Black	2x1	Fluorescent	Fish61	FishShumokuzame	FtrFishShumokuzame	2279	guHT5g6H7tJEyqYzf
57	horse mackerel	150	Sea	Small	0	14–21	No	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Blue	Black	1x1	Fluorescent	Fish46	FishAji	FtrFishAji	2264	L24RYPaEcm9ZXkTui
10	killifish	300	Pond	X-Small	0	3–4	No	NA	NA	NA	All day	All day	All day	All day	All day	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	NA	NA	NA	All day	All day	All day	Yellow	Black	1x1	Fluorescent	Fish9	FishMedaka	FtrFishMedaka	2222	ZR9dsEApEXCjtXu3k
32	king salmon	1800	River (mouth)	X-Large	20	5	No	NA	NA	NA	NA	NA	NA	NA	NA	All day	NA	NA	NA	NA	NA	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	Gray	Black	2x1	Fluorescent	Fish28	FishKingsalmon	FtrFishKingsalmon	2243	Pf5cXKo8pzdB45rAA
6	koi	4000	Pond	Large	20	1–4	No	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	Red	White	1x1	Fluorescent	Fish6	FishNishikigoi	FtrFishNishikigoi	2220	kNwjLeqjg8bFevfiG
17	loach	400	River	Small	0	12–16	No	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	All day	All day	All day	NA	Brown	Blue	1x1	No lighting	Fish13	FishDojou	FtrFishDojou	2228	95yBKrQ4tdyWj4H25
69	mahi-mahi	6000	Pier	X-Large	50	1	Yes	NA	NA	NA	NA	All day	All day	All day	All day	All day	All day	NA	NA	All day	All day	All day	All day	NA	NA	NA	NA	NA	NA	All day	All day	Yellow	Black	2x1	Fluorescent	Fish82	FishShiira	FtrFishShiira	4202	D7gY39QDo8BBNs2Ne
33	mitten crab	2000	River	Small	20	3–5	No	NA	NA	NA	NA	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	NA	NA	NA	Black	Blue	1x1	No lighting	Fish66	FishSyanhaigani	FtrFishShanghai	2244	s2jqSYbMWBX6qCLDm
64	moray eel	2000	Sea	Long	20	2	No	NA	NA	NA	NA	NA	NA	NA	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	Brown	Black	2x1	Fluorescent	Fish55	FishUtsubo	FtrFishUtsubo	2271	4nLynLTMRtoqcCfh4
52	Napoleonfish	10000	Sea	XX-Large	50	1	Yes	NA	NA	NA	NA	NA	NA	4 AM – 9 PM	4 AM – 9 PM	NA	NA	NA	NA	4 AM – 9 PM	4 AM – 9 PM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Light blue	Black	2x1	Fluorescent	Fish43	FishNaporeonfish	FtrFishNaporeonfish	2260	dm4THC3AYR6CZ8bvJ
38	neon tetra	500	River	X-Small	0	2–3	No	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	NA	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	Light blue	Black	1x1	Fluorescent	Fish31	FishNeontetora	FtrFishNeontetora	2248	aEyRb96wcz9m8yjFN
35	nibble fish	1500	River	X-Small	20	2	No	NA	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	NA	NA	NA	NA	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	Brown	Blue	1x1	No lighting	Fish67	FishDokutaafish	FtrFishDoctor	2246	pkPKYsMiXsTWNz4L4
78	oarfish	9000	Sea	XX-Large	50	1	Yes	All day	All day	All day	All day	All day	NA	NA	NA	NA	NA	NA	All day	NA	NA	NA	NA	NA	All day	All day	All day	All day	All day	All day	NA	Red	Blue	3x2	No lighting	Fish69	FishRyuuguunotukai	FtrFishRyugu	2283	qgvEPGk759xaBqwXP
70	ocean sunfish	4000	Sea	Large w/Fin	20	1	Yes	NA	NA	NA	NA	NA	NA	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	NA	NA	NA	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	NA	NA	NA	NA	NA	NA	NA	NA	NA	Blue	Orange	2x2	No lighting	Fish60	FishManbou	FtrFishManbou	2278	6BwK6LHbjFAKzgE82
62	olive flounder	800	Sea	X-Large	0	4–6	No	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Beige	Black	2x1	Fluorescent	Fish51	FishHirame	FtrFishHirame	2269	TXSteKMHuQ9ZfqPXm
2	pale chub	200	River	X-Small	0	6–9	No	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	Blue	Blue	1x1	No lighting	Fish1	FishOikawa	FtrFishOikawa	2216	pCn9TLap3rWiLYfnF
24	pike	1800	River	X-Large	20	1–2	No	NA	NA	NA	NA	NA	NA	NA	NA	All day	All day	All day	All day	NA	NA	All day	All day	All day	All day	NA	NA	NA	NA	NA	NA	Green	Black	2x1	Fluorescent	Fish20	FishPaiku	FtrFishPaiku	2235	XxrB6iKQPhBkYKaXD
40	piranha	2500	River	Small	20	1–3	No	NA	NA	NA	NA	NA	9 AM – 4 PM; 9 PM – 4 AM	9 AM – 4 PM; 9 PM – 4 AM	9 AM – 4 PM; 9 PM – 4 AM	9 AM – 4 PM; 9 PM – 4 AM	NA	NA	NA	9 AM – 4 PM; 9 PM – 4 AM	9 AM – 4 PM; 9 PM – 4 AM	9 AM – 4 PM; 9 PM – 4 AM	NA	NA	NA	NA	NA	NA	NA	NA	9 AM – 4 PM; 9 PM – 4 AM	Green	Black	1x1	Fluorescent	Fish32	FishPirania	FtrFishPirania	2249	5C59HAFxmwNSjH4Zq
25	pond smelt	400	River	Small	0	18–20	No	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	All day	NA	NA	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	Orange	Blue	1x1	No lighting	Fish21	FishWakasagi	FtrFishWakasagi	2236	DDb2GPEjapPmbYbWG
8	pop-eyed goldfish	1300	Pond	X-Small	0	1–2	No	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	Black	Light blue	1x1	No lighting	Fish8	FishDemekin	FtrFishDemekin	2221	RvqzuA438gGqRJ7NG
55	puffer fish	250	Sea	Medium	0	7–8	No	NA	NA	NA	NA	NA	NA	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	Beige	Black	1x1	Fluorescent	Fish45	FishHarisenbon	FtrFishHarisenbon	2263	jNkgaybfSsv8MkaQ2
39	rainbowfish	800	River	X-Small	0	2–3	No	NA	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	NA	NA	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	NA	NA	NA	NA	NA	NA	9 AM – 4 PM	9 AM – 4 PM	Orange	Black	1x1	Fluorescent	Fish80	FishRainbowfish	FtrFishRainbowfish	4194	XJfkdS4C2MPYiscST
9	ranchu goldfish	4500	Pond	Small	20	1–2	No	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	9 AM – 4 PM	Red	Black	1x1	No lighting	Fish85	FishRanchu	FtrFishRanchu	5254	4NE2SteWKEaBYjgWb
71	ray	3000	Sea	X-Large	20	2	No	NA	NA	NA	NA	NA	NA	NA	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	NA	NA	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	4 AM – 9 PM	NA	NA	NA	NA	NA	NA	NA	Brown	Black	2x1	Fluorescent	Fish59	FishEi	FtrFishEi	2277	gP5F7wWFvFqiZzuGw
60	red snapper	3000	Sea	Large	0	5–7	No	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Red	Black	1x1	Fluorescent	Fish49	FishTai	FtrFishTai	2267	iY4zfgojAfLskW4CQ
65	ribbon eel	600	Sea	Long	0	2	No	NA	NA	NA	NA	NA	All day	All day	All day	All day	All day	NA	NA	All day	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	All day	Blue	Black	2x1	Fluorescent	Fish71	FishHanahigeutubo	FtrFishHanahige	2272	T9zeSBHpB5qyAZTxu
45	saddled bichir	4000	River	Large	20	1	No	NA	NA	NA	NA	NA	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	NA	NA	NA	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	NA	NA	NA	NA	NA	NA	NA	NA	9 PM – 4 AM	Brown	Black	2x1	Fluorescent	Fish68	FishEndorikerii	FtrFishEndlicheri	2254	bcTmnwZxrw2iJsQmf
31	salmon	700	River (mouth)	Large	0	20	No	NA	NA	NA	NA	NA	NA	NA	NA	All day	NA	NA	NA	NA	NA	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	Brown	Black	2x1	Fluorescent	Fish27	FishSake	FtrFishSake	2242	iwXhnZcSezNxqdNQf
72	saw shark	12000	Sea	Large w/Fin	50	1	No	NA	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	NA	NA	NA	NA	4 PM – 9 AM	Brown	Black	2x1	Fluorescent	Fish74	FishNokogirizame	FtrFishNokogiri	2281	tsrT7a8cbtwZrmJTz
59	sea bass	400	Sea	X-Large	0	11–18	No	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Gray	Black	2x1	Fluorescent	Fish48	FishSuzuki	FtrFishSuzuki	2266	LkA5hzibm6uiHDB9g
47	sea butterfly	1000	Sea	X-Small	0	10–11	No	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	All day	NA	NA	NA	NA	NA	All day	All day	All day	All day	NA	NA	NA	White	Black	1x1	Fluorescent	Fish37	FishKurione	FtrFishKurione	2255	kd5beizyQGeyjeM79
48	sea horse	1100	Sea	X-Small	0	5–7	No	NA	NA	NA	All day	All day	All day	All day	All day	All day	All day	All day	NA	All day	All day	All day	All day	All day	NA	NA	NA	NA	All day	All day	All day	Orange	Black	1x1	Fluorescent	Fish39	FishTatsunootoshigo	FtrFishTatsunootoshigo	2256	Pw5oZqC29NWEGRfyS
13	snapping turtle	5000	River	Large	0	2–3	No	NA	NA	NA	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	NA	NA	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	NA	NA	NA	NA	NA	9 PM – 4 AM	9 PM – 4 AM	9 PM – 4 AM	Brown	Black	1x1	No lighting	Fish78	FishKamitsukigame	FtrFishKamitukigame	4192	SJa3LLde3Yuz4H3D7
12	soft-shelled turtle	3750	River	Large	20	4	No	NA	NA	NA	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	NA	NA	NA	NA	NA	Green	Black	1x1	No lighting	Fish65	FishSuppon	FtrFishSuppon	2224	izuY2f4GtEGT3BtuR
63	squid	500	Sea	Medium	0	7–10	No	All day	All day	All day	All day	All day	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	All day	All day	All day	All day	All day	All day	All day	Beige	Black	1x1	Fluorescent	Fish52	FishIka	FtrFishIka	2270	qxHJ6BGgyQujkC28w
30	stringfish	15000	River (clifftop)	X-Large	100	1	No	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	NA	NA	NA	NA	NA	4 PM – 9 AM	NA	NA	NA	NA	NA	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	4 PM – 9 AM	NA	NA	NA	Brown	Black	2x1	Fluorescent	Fish26	FishItou	FtrFishItou	2241	APXg8kSzjcmoGGWSP
46	sturgeon	10000	River (mouth)	XX-Large	20	1–4	Yes	All day	All day	All day	NA	NA	NA	NA	NA	All day	All day	All day	All day	NA	NA	All day	All day	All day	All day	All day	All day	All day	NA	NA	NA	Black	Black	2x1	Fluorescent	Fish75	FishTyouzame	FtrFishTyouzame	4189	XabKYtzYDNSNrFvpw
76	suckerfish	1500	Sea	Medium w/Fin	20	2	No	NA	NA	NA	NA	NA	All day	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	All day	Black	Black	1x1	Fluorescent	Fish83	FishKobanzame	FtrFishKobanzame	4203	FPpwmMDn9rYAJazyS
50	surgeonfish	1000	Sea	Small	0	2	No	NA	NA	NA	All day	All day	All day	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	All day	All day	All day	Blue	Black	1x1	Fluorescent	Fish41	FishNanyouhagi	FtrFishNanyouhagi	2258	s7iioofF5C7PzCZyF
26	sweetfish	900	River	Medium	0	5–10	No	NA	NA	NA	NA	NA	NA	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	Green	Black	1x1	Fluorescent	Fish22	FishAyu	FtrFishAyu	2237	dWgg2bjCicuiZjXW6
14	tadpole	100	Pond	X-Small	0	5–6	No	NA	NA	All day	All day	All day	All day	All day	NA	NA	NA	NA	NA	All day	NA	NA	NA	NA	NA	NA	NA	All day	All day	All day	All day	Black	Blue	1x1	No lighting	Fish64	FishOtamajakusi	FtrFishOtama	2225	rb8MsjWopKYWuQK8s
23	tilapia	800	River	Medium	0	7–9	No	NA	NA	NA	NA	NA	All day	All day	All day	All day	All day	NA	NA	All day	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	All day	Black	Black	1x1	Fluorescent	Fish76	FishThirapia	FtrFishThirapia	4190	as78rnkwY3ahrTkBY
66	tuna	7000	Pier	XX-Large	50	2	Yes	All day	All day	All day	All day	NA	NA	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	All day	All day	All day	All day	All day	All day	NA	NA	Blue	Black	2x1	Fluorescent	Fish57	FishMaguro	FtrFishMaguro	2274	4PnGXx9DSb866AeCM
75	whale shark	13000	Sea	Large w/Fin	50	1	Yes	NA	NA	NA	NA	NA	All day	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	All day	Black	Blue	3x2	No lighting	Fish72	FishJinbeezame	FtrFishJinbee	2282	r3RAtJsXENwnFvQh7
21	yellow perch	300	River	Medium	0	7–10	No	All day	All day	All day	NA	NA	NA	NA	NA	NA	All day	All day	All day	NA	NA	NA	All day	All day	All day	All day	All day	All day	NA	NA	NA	Yellow	Black	1x1	Fluorescent	Fish18	FishYellowparch	FtrFishYellowparch	2233	bLgE5dicZniF5zZDW
53	zebra turkeyfish	500	Sea	Medium	0	6–8	No	NA	NA	NA	All day	All day	All day	All day	All day	All day	All day	All day	NA	All day	All day	All day	All day	All day	NA	NA	NA	NA	All day	All day	All day	Red	Black	1x1	Fluorescent	Fish44	FishMinokasago	FtrFishMinokasago	2261	h7fa7Fh3Ay7vAxgE2`;

const fish_image_urls = [
  "https://dodo.ac/np/images/4/4d/Bitterling_NH_Icon.png",
  "https://dodo.ac/np/images/e/e2/Pale_Chub_NH_Icon.png",
  "https://dodo.ac/np/images/f/f2/Crucian_Carp_NH_Icon.png",
  "https://dodo.ac/np/images/d/db/Dace_NH_Icon.png",
  "https://dodo.ac/np/images/5/5d/Carp_NH_Icon.png",
  "https://dodo.ac/np/images/2/2d/Koi_NH_Icon.png",
  "https://dodo.ac/np/images/7/71/Goldfish_NH_Icon.png",
  "https://dodo.ac/np/images/0/0d/Pop-Eyed_Goldfish_NH_Icon.png",
  "https://dodo.ac/np/images/3/35/Ranchu_Goldfish_NH_Icon.png",
  "https://dodo.ac/np/images/e/ea/Killifish_NH_Icon.png",
  "https://dodo.ac/np/images/9/96/Crawfish_NH_Icon.png",
  "https://dodo.ac/np/images/e/eb/Soft-Shelled_Turtle_NH_Icon.png",
  "https://dodo.ac/np/images/b/b1/Snapping_Turtle_NH_Icon.png",
  "https://dodo.ac/np/images/b/bb/Tadpole_NH_Icon.png",
  "https://dodo.ac/np/images/2/2f/Frog_NH_Icon.png",
  "https://dodo.ac/np/images/e/ec/Freshwater_Goby_NH_Icon.png",
  "https://dodo.ac/np/images/a/a5/Loach_NH_Icon.png",
  "https://dodo.ac/np/images/0/0d/Catfish_NH_Icon.png",
  "https://dodo.ac/np/images/5/50/Giant_Snakehead_NH_Icon.png",
  "https://dodo.ac/np/images/0/0c/Bluegill_NH_Icon.png",
  "https://dodo.ac/np/images/6/67/Yellow_Perch_NH_Icon.png",
  "https://dodo.ac/np/images/0/00/Black_Bass_NH_Icon.png",
  "https://dodo.ac/np/images/e/ef/Tilapia_NH_Icon.png",
  "https://dodo.ac/np/images/9/9f/Pike_NH_Icon.png",
  "https://dodo.ac/np/images/0/0f/Pond_Smelt_NH_Icon.png",
  "https://dodo.ac/np/images/6/6a/Sweetfish_NH_Icon.png",
  "https://dodo.ac/np/images/d/db/Cherry_Salmon_NH_Icon.png",
  "https://dodo.ac/np/images/8/80/Char_NH_Icon.png",
  "https://dodo.ac/np/images/f/fc/Golden_Trout_NH_Icon.png",
  "https://dodo.ac/np/images/e/eb/Stringfish_NH_Icon.png",
  "https://dodo.ac/np/images/c/ca/Salmon_NH_Icon.png",
  "https://dodo.ac/np/images/e/e1/King_Salmon_NH_Icon.png",
  "https://dodo.ac/np/images/9/9d/Mitten_Crab_NH_Icon.png",
  "https://dodo.ac/np/images/3/38/Guppy_NH_Icon.png",
  "https://dodo.ac/np/images/0/0b/Nibble_Fish_NH_Icon.png",
  "https://dodo.ac/np/images/c/cd/Angelfish_NH_Icon.png",
  "https://dodo.ac/np/images/0/0b/Betta_NH_Icon.png",
  "https://dodo.ac/np/images/4/42/Neon_Tetra_NH_Icon.png",
  "https://dodo.ac/np/images/e/e7/Rainbowfish_NH_Icon.png",
  "https://dodo.ac/np/images/c/c6/Piranha_NH_Icon.png",
  "https://dodo.ac/np/images/6/67/Arowana_NH_Icon.png",
  "https://dodo.ac/np/images/f/fe/Dorado_NH_Icon.png",
  "https://dodo.ac/np/images/a/a2/Gar_NH_Icon.png",
  "https://dodo.ac/np/images/b/b1/Arapaima_NH_Icon.png",
  "https://dodo.ac/np/images/4/46/Saddled_Bichir_NH_Icon.png",
  "https://dodo.ac/np/images/9/91/Sturgeon_NH_Icon.png",
  "https://dodo.ac/np/images/f/f7/Sea_Butterfly_NH_Icon.png",
  "https://dodo.ac/np/images/d/dc/Sea_Horse_NH_Icon.png",
  "https://dodo.ac/np/images/4/4f/Clown_Fish_NH_Icon.png",
  "https://dodo.ac/np/images/c/cb/Surgeonfish_NH_Icon.png",
  "https://dodo.ac/np/images/4/47/Butterfly_Fish_NH_Icon.png",
  "https://dodo.ac/np/images/3/30/Napoleonfish_NH_Icon.png",
  "https://dodo.ac/np/images/8/85/Zebra_Turkeyfish_NH_Icon.png",
  "https://dodo.ac/np/images/9/95/Blowfish_NH_Icon.png",
  "https://dodo.ac/np/images/e/ee/Puffer_Fish_NH_Icon.png",
  "https://dodo.ac/np/images/7/7f/Anchovy_%28Fish%29_NH_Icon.png",
  "https://dodo.ac/np/images/a/a3/Horse_Mackerel_NH_Icon.png",
  "https://dodo.ac/np/images/d/d5/Barred_Knifejaw_NH_Icon.png",
  "https://dodo.ac/np/images/7/7f/Sea_Bass_NH_Icon.png",
  "https://dodo.ac/np/images/c/c1/Red_Snapper_NH_Icon.png",
  "https://dodo.ac/np/images/1/1f/Dab_NH_Icon.png",
  "https://dodo.ac/np/images/b/b3/Olive_Flounder_NH_Icon.png",
  "https://dodo.ac/np/images/b/bf/Squid_NH_Icon.png",
  "https://dodo.ac/np/images/3/3e/Moray_Eel_NH_Icon.png",
  "https://dodo.ac/np/images/2/26/Ribbon_Eel_NH_Icon.png",
  "https://dodo.ac/np/images/4/4b/Tuna_NH_Icon.png",
  "https://dodo.ac/np/images/2/2a/Blue_Marlin_NH_Icon.png",
  "https://dodo.ac/np/images/1/17/Giant_Trevally_NH_Icon.png",
  "https://dodo.ac/np/images/d/d6/Mahi-Mahi_NH_Icon.png",
  "https://dodo.ac/np/images/e/eb/Ocean_Sunfish_NH_Icon.png",
  "https://dodo.ac/np/images/9/9b/Ray_NH_Icon.png",
  "https://dodo.ac/np/images/4/45/Saw_Shark_NH_Icon.png",
  "https://dodo.ac/np/images/e/ec/Hammerhead_Shark_NH_Icon.png",
  "https://dodo.ac/np/images/2/20/Great_White_Shark_NH_Icon.png",
  "https://dodo.ac/np/images/4/4f/Whale_Shark_NH_Icon.png",
  "https://dodo.ac/np/images/d/de/Suckerfish_NH_Icon.png",
  "https://dodo.ac/np/images/3/34/Football_Fish_NH_Icon.png",
  "https://dodo.ac/np/images/5/50/Oarfish_NH_Icon.png",
  "https://dodo.ac/np/images/e/e0/Barreleye_NH_Icon.png",
  "https://dodo.ac/np/images/4/45/Coelacanth_NH_Icon.png",
];

function csvToArray(csv) {
  const lines = csv.split('\n');
  const headers = lines[0].split('\t');

  const arrayOfObjects = lines.slice(1).map(line => {
    const values = line.split('\t');
    let obj = {};

    headers.forEach((header, i) => {
      obj[header] = values[i];
    });
    
    return obj;
  });

  return arrayOfObjects;
}

// implement search bar functionality
function search() {
  var userInput, filter, container, cards, i, title, txtValue;

  userInput = document.getElementById('searchInput'); // from html
  filter = userInput.value.toUpperCase(); // normalize input

  container = document.getElementById("card-container");
  cards = container.getElementsByClassName('card');

  // check each card + compare to input
  for (i = 0; i < cards.length; i++) {
    
    // get the title from the card header
    title = cards[i].querySelector('.card-content h2');
    titleText = title ? title.textContent || title.innerText : "";

    // see if the card title contains the user input
    if (titleText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}


// GIVEN FUNCTIONS

// This function adds cards the page to display the data in the array
function showCards() {
  let data = csvToArray(fish_data);
  let images = fish_image_urls;

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < data.length; i++) {
    let name = data[i].Name.toUpperCase();
    image = images[data[i].Number - 1];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, name, image); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);


// example button functions

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
