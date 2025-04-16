/**
 * Data Catalog Project - SEA Stage 2
 * Kumiko Komori
 */


// IMPORTED DATA (copy-pasted from csv file)

const FISH_DATA = `Num	Name	Price	Where/How	Shadow	Total Catches to Unlock	Spawn Rates	Rain/Snow Catch Up	NH Jan	NH Feb	NH Mar	NH Apr	NH May	NH Jun	NH Jul	NH Aug	NH Sep	NH Oct	NH Nov	NH Dec	SH Jan	SH Feb	SH Mar	SH Apr	SH May	SH Jun	SH Jul	SH Aug	SH Sep	SH Oct	SH Nov	SH Dec	Color1	Color2	Size	Lighting Type	Icon Filename	Critterpedia Filename	Furniture Filename	Internal ID	Unique Entry ID
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
53	zebra turkeyfish	500	Sea	Medium	0	6–8	No	NA	NA	NA	All day	All day	All day	All day	All day	All day	All day	All day	NA	All day	All day	All day	All day	All day	NA	NA	NA	NA	All day	All day	All day	Red	Black	1x1	Fluorescent	Fish44	FishMinokasago	FtrFishMinokasago	2261	h7fa7Fh3Ay7vAxgE2
`; // data about ACNH fish
const FISH_IMAGE_URLS = [
  "",
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
]; // image addresses (in number order)

const BUG_DATA = `Num	Name	Price	Where/How	Weather	Total Catches to Unlock	Spawn Rates	NH Jan	NH Feb	NH Mar	NH Apr	NH May	NH Jun	NH Jul	NH Aug	NH Sep	NH Oct	NH Nov	NH Dec	SH Jan	SH Feb	SH Mar	SH Apr	SH May	SH Jun	SH Jul	SH Aug	SH Sep	SH Oct	SH Nov	SH Dec	Color1	Color2	Icon Filename	Critterpedia Filename	Furniture Filename	Internal ID	Unique Entry ID
10	agrias butterfly	3000	Flying near flowers	Any except rain	20	5	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	Pink	Green	Ins6	InsectMiirotateha	FtrInsectMiirotateha	620	aj95rMzdbSbvZy9A2
69	ant	80	On rotten turnips	Any weather	0	0	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Black	White	Ins26	InsectAri	FtrInsectAri	588	QZpmczZu4hW2a4Rpv
14	Atlas moth	3000	On trees (any kind)	Any weather	20	5	NA	NA	NA	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	NA	NA	NA	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	NA	NA	NA	NA	NA	NA	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	Orange	Yellow	Ins10	InsectYonagunisan	FtrInsectYonagunisan	652	u2GhYQJXDCQKp7AQ8
68	bagworm	600	Shaking trees (hardwood or cedar only)	Any weather	0	50	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Brown	Blue	Ins36	InsectMinomushi	FtrInsectMinomushi	622	QvxgCm82JqHsDknY4
34	banded dragonfly	4500	Flying near water	Any except rain	50	7	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	Black	Yellow	Ins24	InsectOniyanma	FtrInsectOniyanma	635	pCFep58D6QusMSvR7
21	bell cricket	430	On the ground	Any except rain	0	60	NA	NA	NA	NA	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	NA	Black	Beige	Ins31	InsectSuzumushi	FtrInsectSuzumushi	642	d5EQqbQsip82G2CZE
49	blue weevil beetle	800	On palm trees	Any weather	0	2	NA	NA	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Green	Pink	Ins80	InsectHousekizoumushi	FtrInsectHousekizoumushi	3485	qocWy6r5RXjeThdYy
26	brown cicada	250	On hardwood/cedar trees	Any weather	0	70	NA	NA	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Brown	Green	Ins17	InsectAburazemi	FtrInsectAburazemi	582	gBLRZ2J2R2wwYWFCk
77	centipede	300	From hitting rocks	Any weather	0	30	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	NA	NA	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	NA	NA	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	4 PM – 11 PM	Black	Orange	Ins60	InsectMukade	FtrInsectMukade	628	ubStMQwHMJJcYje38
31	cicada shell	10	On hardwood/cedar trees	Any weather	50	1	NA	NA	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Brown	Green	Ins69	InsectSeminonukegara	FtrInsectSeminonukegara	641	6s3MCahAroqpjGybW
47	citrus long-horned beetle	350	On tree stumps	Any except rain	0	10	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Black	Green	Ins39	InsectGomadarakamikiri	FtrInsectGomadarakamikiri	609	QR88MPLzYxSCHWZJb
5	common bluebottle	300	Flying	Any except rain	0	70	NA	NA	NA	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	NA	NA	NA	NA	4 AM – 7 PM	4 AM – 7 PM	NA	NA	NA	NA	NA	NA	NA	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	Black	Green	Ins72	InsectAosujiageha	FtrInsectAosujiageha	3477	vgkW2eovbpxNuGsFZ
1	common butterfly	160	Flying	Any except rain	0	60	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	NA	NA	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	NA	NA	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	White	Green	Ins0	InsectMonshirocho	FtrInsectMonshirocho	626	tRJxp5N9XbwAGQHZc
20	cricket	130	On the ground	Any except rain	0	60	NA	NA	NA	NA	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	Brown	Beige	Ins30	InsectKohrogi	FtrInsectKohrogi	617	Lr7eFJzJJZpWRWekm
59	cyclommatus stag	8000	On palm trees	Any weather	100	2	NA	NA	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Black	Black	Ins49	InsectHosoakakuwagata	FtrInsectHosoakakuwagata	602	moBevd7J5hwpHeLcs
35	damselfly	500	Flying near water	Any except rain	0	60	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	All day	All day	All day	All day	NA	NA	NA	NA	Green	Blue	Ins81	InsectItotonbo	FtrInsectItotonbo	5339	pBmqsa7CyeKzyRjDT
33	darner dragonfly	230	Flying near water	Any except rain	0	40	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	Green	Green	Ins23	InsectGinyanma	FtrInsectGinyanma	595	723NiWMh4iY9RJtAM
39	diving beetle	800	On rivers/ponds	Any weather	0	10	NA	NA	NA	NA	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	NA	NA	NA	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	NA	NA	NA	NA	NA	NA	NA	8 AM – 7 PM	8 AM – 7 PM	Black	Blue	Ins28	InsectGengorou	FtrInsectGengorou	594	CBjt7itnPqEtNznrX
53	drone beetle	200	On trees (any kind)	Any weather	0	40	NA	NA	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	All day	Green	Blue	Ins75	InsectKanabun	FtrInsectKanabun	3480	uXmtRAQgY3g596tov
50	dung beetle	3000	Pushing snowballs	Any weather	0	10	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	All day	NA	NA	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	Black	Beige	Ins40	InsectFunkorogashi	FtrInsectFunkorogashi	604	p9RhE8wLWpHtcoq5G
51	earth-boring dung beetle	300	On the ground	Any weather	0	30	NA	NA	NA	NA	NA	NA	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	Purple	Orange	Ins42	InsectOhsenchikogane	FtrInsectSenchikogane	614	k2fqxdYnTF8BpHB7u
9	emperor butterfly	4000	Flying near flowers	Any except rain	20	5	5 PM – 8 AM	5 PM – 8 AM	5 PM – 8 AM	NA	NA	5 PM – 8 AM	5 PM – 8 AM	5 PM – 8 AM	5 PM – 8 AM	NA	NA	5 PM – 8 AM	5 PM – 8 AM	5 PM – 8 AM	5 PM – 8 AM	NA	NA	5 PM – 8 AM	5 PM – 8 AM	5 PM – 8 AM	5 PM – 8 AM	NA	NA	5 PM – 8 AM	Blue	Orange	Ins5	InsectMorufuocho	FtrInsectMorufuocho	627	Lwkf7oQ3mcWYm6eEY
30	evening cicada	550	On hardwood/cedar trees	Any weather	0	50	NA	NA	NA	NA	NA	NA	4 AM – 8 AM; 4 PM – 7 PM	4 AM – 8 AM; 4 PM – 7 PM	NA	NA	NA	NA	4 AM – 8 AM; 4 PM – 7 PM	4 AM – 8 AM; 4 PM – 7 PM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Black	Orange	Ins20	InsectHigurashi	FtrInsectHigurashi	601	kzX4apD9C3Nq8khzR
36	firefly	300	Flying near water	Any except rain	0	200	NA	NA	NA	NA	NA	7 PM – 4 AM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	7 PM – 4 AM	Black	Blue	Ins41	InsectHotaru	FtrInsectHotaru	603	PgiwPqykwafyz5EL6
74	flea	70	On villagers	Any weather	0	5–10	NA	NA	NA	All day	All day	All day	All day	All day	All day	All day	All day	NA	All day	All day	All day	All day	All day	NA	NA	NA	NA	All day	All day	All day	Brown	White	Ins56	InsectNomi	FtrInsectNomi	633	QzDywoJEAJDcjGfEF
72	fly	60	Flying near trash (boots, tires, cans) or rotten turnips	Any weather	0	0	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Black	White	Ins59	InsectHae	FtrInsectHae	597	xdBmuMgXJ6jGxpabK
28	giant cicada	500	On hardwood/cedar trees	Any weather	20	50	NA	NA	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Black	Yellow	Ins65	InsectKumazemi	FtrInsectKumazemi	618	nPm2r7idGshQW87MN
57	giant stag	10000	On trees (any kind)	Any weather	50	5	NA	NA	NA	NA	NA	NA	11 PM – 8 AM	11 PM – 8 AM	NA	NA	NA	NA	11 PM – 8 AM	11 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Black	Black	Ins47	InsectOhkuwagata	FtrInsectOhkuwagata	637	KhrTLzayFz23zz2kn
40	giant water bug	2000	On rivers/ponds	Any weather	50	5	NA	NA	NA	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	NA	NA	NA	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	NA	NA	NA	NA	NA	NA	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	Brown	Blue	Ins76	InsectTagame	FtrInsectTagame	5157	ZsDdBvqAjZMG8EQkZ
61	giraffe stag	12000	On palm trees	Any weather	100	1	NA	NA	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Black	Black	Ins77	InsectGirafanokogirikuwagata	FtrInsectGirafanokogirikuwagata	3482	PSChjzMhGwhnsHTs4
60	golden stag	12000	On palm trees	Any weather	100	1	NA	NA	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Black	Yellow	Ins50	InsectOugononikuwagata	FtrInsectOugononikuwagata	638	2C8cSphidFCBPxYEe
54	goliath beetle	8000	On palm trees	Any weather	100	2	NA	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	NA	5 PM – 8 AM	Red	Black	Ins55	InsectGoraiasuohtsunohanamuguri	FtrInsectGoraiasuohtsunohanamuguri	596	wZQMZfhtRyPFAapmF
19	grasshopper	160	On the ground	Any except rain	0	60	NA	NA	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	NA	NA	NA	NA	NA	Green	Beige	Ins32	InsectKirigirisu	FtrInsectKirigirisu	613	zkzSLJPkkcwXwShKc
7	great purple emperor	3000	Flying near flowers	Any except rain	50	5	NA	NA	NA	NA	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	NA	NA	NA	NA	4 AM – 7 PM	4 AM – 7 PM	NA	NA	NA	NA	NA	NA	NA	NA	4 AM – 7 PM	4 AM – 7 PM	Purple	Orange	Ins74	InsectOhmurasaki	FtrInsectOhmurasaki	3479	ZSre7sheZoRqsJwHQ
70	hermit crab	1000	Disguised on shoreline	Any weather	0	25	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	Beige	Pink	Ins66	InsectYadokari	FtrInsectYadokari	651	TzbsfYgE4k2qo7fHN
24	honeybee	200	Flying near flowers	Any except rain	0	30	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	NA	8 AM – 5 PM	NA	NA	NA	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	Yellow	Blue	Ins11	InsectMitsubachi	FtrInsectMitsubachi	623	yeWiAiqDRwinvumDm
63	horned atlas	8000	On palm trees	Any weather	100	2	NA	NA	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Black	Black	Ins52	InsectKohkasasuohkabuto	FtrInsectKohkasasuohkabuto	615	S93y8gxrSHFNCFmwJ
62	horned dynastid	1350	On trees (any kind)	Any weather	0	35	NA	NA	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Brown	Black	Ins51	InsectKabutomushi	FtrInsectKabutomushi	612	zaG8qsKLpbTjysx7D
64	horned elephant	8000	On palm trees	Any weather	100	2	NA	NA	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Beige	Black	Ins53	InsectZoukabuto	FtrInsectZoukabuto	653	M7SHXNEMf78nJD6fE
65	horned hercules	12000	On palm trees	Any weather	100	1	NA	NA	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	5 PM – 8 AM	5 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Yellow	Black	Ins54	InsectHerakuresuohkabuto	FtrInsectHerakuresuohkabuto	600	TqhEomNEMDZ2wcTpk
45	jewel beetle	2400	On tree stumps	Any except rain	20	5	NA	NA	NA	All day	All day	All day	All day	All day	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	NA	NA	NA	All day	All day	All day	Green	Black	Ins44	InsectTamamushi	FtrInsectTamamushi	645	TYFowxRG4ydcvotkQ
43	ladybug	200	On flowers	Any except rain	0	40	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	8 AM – 5 PM	NA	NA	NA	NA	NA	8 AM – 5 PM	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	Red	Green	Ins37	InsectTentoumushi	FtrInsectTentoumushi	647	pYSSbvXzkuFneRvQ7
16	long locust	200	On the ground	Any weather	0	50	NA	NA	NA	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	NA	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	NA	NA	NA	NA	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	Green	Blue	Ins13	InsectShoryobatta	FtrInsectShoryobatta	644	Q57sgq4hQTNZAqWXj
15	Madagascan sunset moth	2500	Flying near flowers	Any except rain	20	5	NA	NA	NA	8 AM – 4 PM	8 AM – 4 PM	8 AM – 4 PM	8 AM – 4 PM	8 AM – 4 PM	8 AM – 4 PM	NA	NA	NA	8 AM – 4 PM	8 AM – 4 PM	8 AM – 4 PM	NA	NA	NA	NA	NA	NA	8 AM – 4 PM	8 AM – 4 PM	8 AM – 4 PM	Green	Pink	Ins79	InsectNishikiohtsubamega	FtrInsectNishikiohtsubamega	3484	EFWMygLqnJinFoXSW
42	man-faced stink bug	1000	On flowers	Any except rain	20	20	NA	NA	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	NA	NA	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	NA	NA	NA	NA	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	Black	Orange	Ins78	InsectJinmenkamemushi	FtrInsectJinmenkamemushi	3483	zvr84Jvf4s6K23XJ5
22	mantis	430	On flowers	Any except rain	0	30	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	Green	Green	Ins15	InsectKamakiri	FtrInsectKamakiri	607	Qko2mfz7SaESpMcCv
17	migratory locust	600	On the ground	Any weather	20	10	NA	NA	NA	NA	NA	NA	NA	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	NA	NA	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	NA	NA	NA	NA	NA	NA	NA	Green	Orange	Ins14	InsectTonosamabatta	FtrInsectTonosamabatta	648	dkGagcjd7aZwFEszw
56	miyama stag	1000	On trees (any kind)	Any weather	0	35	NA	NA	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Black	Black	Ins46	InsectMiyamakuwagata	FtrInsectMiyamakuwagata	624	qRGGm6MfuP4Aqdk3M
37	mole cricket	500	Underground (dig where noise is loudest)	Any weather	0	30	All day	All day	All day	All day	All day	NA	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	All day	All day	All day	All day	All day	All day	All day	NA	Brown	Yellow	Ins33	InsectOkera	FtrInsectOkera	634	HMWPGeeKw9LP6ucSq
8	monarch butterfly	140	Flying near flowers	Any except rain	0	70	NA	NA	NA	NA	NA	NA	NA	NA	4 AM – 5 PM	4 AM – 5 PM	4 AM – 5 PM	NA	NA	NA	4 AM – 5 PM	4 AM – 5 PM	4 AM – 5 PM	NA	NA	NA	NA	NA	NA	NA	Orange	Blue	Ins4	InsectOhkabamadara	FtrInsectOhkabamadara	636	BJPKSZMZ2tkLXkWjL
73	mosquito	130	Flying	Any except rain	0	50	NA	NA	NA	NA	NA	5 PM – 4 AM	5 PM – 4 AM	5 PM – 4 AM	5 PM – 4 AM	NA	NA	NA	5 PM – 4 AM	5 PM – 4 AM	5 PM – 4 AM	NA	NA	NA	NA	NA	NA	NA	NA	5 PM – 4 AM	Black	White	Ins58	InsectKa	FtrInsectKa	606	3mMZ74qpWWnoizJHh
13	moth	130	Flying near light sources	Any except rain	0	25	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	Beige	Yellow	Ins9	InsectGa	FtrInsectGa	592	7Kd97rqbYBuzuCHgf
23	orchid mantis	2400	On white flowers	Any except rain	20	15	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	White	Pink	Ins16	InsectHanakamakiri	FtrInsectHanakamakiri	598	9b4v6nMrrThHEtNbB
6	paper kite butterfly	1000	Flying near flowers	Any except rain	0	20	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	White	Yellow	Ins73	InsectOhgomamadara	FtrInsectOhgomamadara	3478	hzwridDJE99rPHLrZ
4	peacock butterfly	2500	Flying near blue/purple/black flowers	Any except rain	20	5	NA	NA	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	Green	Blue	Ins3	InsectKarasuageha	FtrInsectKarasuageha	610	rguKzmnRkGmBMKzyE
76	pill bug	250	From hitting rocks	Any weather	0	50	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	NA	NA	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	NA	NA	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	11 PM – 4 PM	Black	Blue	Ins57	InsectDangomushi	FtrInsectDangomushi	590	SGHXhcTzaNJD2z926
38	pondskater	130	On rivers/ponds	Any weather	0	30	NA	NA	NA	NA	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	NA	NA	NA	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	NA	NA	NA	NA	NA	NA	NA	8 AM – 7 PM	8 AM – 7 PM	Black	Blue	Ins27	InsectAmenbo	FtrInsectAmenbo	587	eSBNwiuZforpxNYem
12	Queen Alexandra's birdwing	4000	Flying near flowers	Any except rain	50	5	NA	NA	NA	NA	8 AM – 4 PM	8 AM – 4 PM	8 AM – 4 PM	8 AM – 4 PM	8 AM – 4 PM	NA	NA	NA	8 AM – 4 PM	8 AM – 4 PM	8 AM – 4 PM	NA	NA	NA	NA	NA	NA	NA	8 AM – 4 PM	8 AM – 4 PM	Green	Pink	Ins8	InsectArekisandoratoribaneageha	FtrInsectArekisandoratoribaneageha	586	PbNXeN9GZuJuow7jv
58	rainbow stag	6000	On trees (any kind)	Any weather	50	7	NA	NA	NA	NA	NA	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	NA	NA	NA	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	NA	7 PM – 8 AM	Brown	Black	Ins48	InsectNijiirokuwagata	FtrInsectNijiirokuwagata	631	Egfv6BDtFMeGZPmfh
11	Rajah Brooke's birdwing	2500	Flying near flowers	Any except rain	20	5	8 AM – 5 PM	8 AM – 5 PM	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	NA	8 AM – 5 PM	8 AM – 5 PM	8 AM – 5 PM	Green	Pink	Ins7	InsectAkaeritoribaneageha	FtrInsectAkaeritoribaneageha	584	gLpHgXT4pPXP4XfWQ
32	red dragonfly	180	Flying near water	Any except rain	0	80	NA	NA	NA	NA	NA	NA	NA	NA	8 AM – 7 PM	8 AM – 7 PM	NA	NA	NA	NA	8 AM – 7 PM	8 AM – 7 PM	NA	NA	NA	NA	NA	NA	NA	NA	Red	Orange	Ins22	InsectAkiakane	FtrInsectAkiakane	585	PKSHvkPphXteXHKuG
18	rice grasshopper	400	On the ground	Any weather	0	20	NA	NA	NA	NA	NA	NA	NA	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	NA	NA	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	8 AM – 7 PM	NA	NA	NA	NA	NA	NA	NA	Green	Yellow	Ins67	InsectInago	FtrInsectInago	605	ZxXDxrgPvXEHz24Ni
27	robust cicada	300	On hardwood/cedar trees	Any weather	0	70	NA	NA	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Black	Blue	Ins18	InsectMinminzemi	FtrInsectMinminzemi	621	cd5ymnRmRvT4n4yjB
48	rosalia batesi beetle	3000	On tree stumps	Any except rain	20	2	NA	NA	NA	NA	All day	All day	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	All day	All day	Blue	Black	Ins82	InsectRuriboshikamikiri	FtrInsectRuriboshikamikiri	3487	MSTA9vdJmGoDDADrF
55	saw stag	2000	On trees (any kind)	Any weather	0	20	NA	NA	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Brown	Black	Ins46	InsectNokogirikuwagata	FtrInsectNokogirikuwagata	632	YQq3iSiBcBAHTWxc2
52	scarab beetle	10000	On trees (any kind)	Any weather	50	3	NA	NA	NA	NA	NA	NA	11 PM – 8 AM	11 PM – 8 AM	NA	NA	NA	NA	11 PM – 8 AM	11 PM – 8 AM	NA	NA	NA	NA	NA	NA	NA	NA	NA	NA	Black	Beige	Ins43	InsectPurachinakogane	FtrInsectPurachinakogane	639	2HXdFD8s6BmYYMf4u
80	scorpion	8000	On the ground	Any weather	0	2	NA	NA	NA	NA	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	NA	NA	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	NA	NA	NA	NA	NA	NA	7 PM – 4 AM	7 PM – 4 AM	Black	Black	Ins63	InsectSasori	FtrInsectSasori	640	xMzHsHbjvvicZvYxg
75	snail	250	On rocks/bushes	Rain only	0	20	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Beige	Green	Ins29	InsectKatatsumuri	FtrInsectKatatsumuri	611	rDNLeQnmJQGxsHpmL
78	spider	600	Shaking trees (hardwood or cedar only)	Any weather	0	30	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	7 PM – 8 AM	Yellow	Orange	Ins61	InsectKumo	FtrInsectKumo	619	s2u8kDoMQx7GbAJTR
41	stinkbug	120	On flowers	Any except rain	0	40	NA	NA	All day	All day	All day	All day	All day	All day	All day	All day	NA	NA	All day	All day	All day	All day	NA	NA	NA	NA	All day	All day	All day	All day	Green	Yellow	Ins64	InsectKamemushi	FtrInsectKamemushi	608	4u5GZ4z3CyaHhMgqj
79	tarantula	8000	On the ground	Any weather	0	2	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	NA	NA	NA	NA	NA	NA	7 PM – 4 AM	7 PM – 4 AM	NA	NA	NA	NA	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	7 PM – 4 AM	NA	NA	Brown	Black	Ins62	InsectTaranchura	FtrInsectTaranchura	646	4mto3ZvrZYpJxbm4c
44	tiger beetle	1500	On the ground	Any except rain	20	15	NA	All day	All day	All day	All day	All day	All day	All day	All day	All day	NA	NA	All day	All day	All day	All day	NA	NA	NA	All day	All day	All day	All day	All day	Green	Yellow	Ins70	InsectHanmyou	FtrInsectHanmyou	599	zzGvu3797KnMb4LCD
3	tiger butterfly	240	Flying	Any except rain	0	40	NA	NA	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	NA	NA	NA	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	NA	NA	NA	NA	NA	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	Yellow	Green	Ins2	InsectAgehacho	FtrInsectAgehacho	583	GcSpepwg536mYnNuu
46	violin beetle	450	On tree stumps	Any except rain	0	10	NA	NA	NA	NA	All day	All day	NA	NA	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	All day	All day	Brown	Black	Ins38	InsectBaiorinmushi	FtrInsectBaiorinmushi	650	poAcys5Mr35ELp5PS
29	walker cicada	400	On hardwood/cedar trees	Any weather	0	40	NA	NA	NA	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	8 AM – 5 PM	8 AM – 5 PM	NA	NA	NA	NA	NA	NA	NA	NA	NA	Black	Pink	Ins19	InsectTsukutsukuhousi	FtrInsectTsukutsukuhousi	649	QdrL4K7seJHvd4ZZM
67	walking leaf	600	Disguised under trees	Any weather	20	10	NA	NA	NA	NA	NA	NA	All day	All day	All day	NA	NA	NA	All day	All day	All day	NA	NA	NA	NA	NA	NA	NA	NA	NA	Green	Green	Ins34	InsectKonohamushi	FtrInsectKonohamushi	616	kuZaMcg2E7ZX56nio
66	walking stick	600	On trees (any kind)	Any weather	20	10	NA	NA	NA	NA	NA	NA	4 AM – 8 AM; 5 PM – 7 PM	4 AM – 8 AM; 5 PM – 7 PM	4 AM – 8 AM; 5 PM – 7 PM	4 AM – 8 AM; 5 PM – 7 PM	4 AM – 8 AM; 5 PM – 7 PM	NA	4 AM – 8 AM; 5 PM – 7 PM	4 AM – 8 AM; 5 PM – 7 PM	4 AM – 8 AM; 5 PM – 7 PM	4 AM – 8 AM; 5 PM – 7 PM	4 AM – 8 AM; 5 PM – 7 PM	NA	NA	NA	NA	NA	NA	NA	Brown	Yellow	Ins35	InsectNanafushi	FtrInsectNanafushi	630	WQjgrjYotbwH59vXG
25	wasp	2500	Shaking trees	Any weather	0	0	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Yellow	Orange	Ins12	InsectHachi	FtrInsectHachi	643	ZEfBHqM6pFEddBezw
71	wharf roach	200	On beach rocks	Any weather	0	20	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	All day	Beige	Blue	Ins71	InsectFunamushi	FtrInsectFunamushi	591	2fp9ChfPuPdYefTK3
2	yellow butterfly	160	Flying	Any except rain	0	60	NA	NA	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	NA	NA	4 AM – 7 PM	4 AM – 7 PM	NA	NA	NA	NA	4 AM – 7 PM	4 AM – 7 PM	NA	NA	NA	NA	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	4 AM – 7 PM	Yellow	Blue	Ins1	InsectMonkicho	FtrInsectMonkicho	625	9d92MqgcnGao8wQjB
`; // data about ACNH bugs
const BUG_IMAGE_URLS = [
  "",
  "https://dodo.ac/np/images/f/f8/Common_Butterfly_NH_Icon.png",
  "https://dodo.ac/np/images/4/43/Yellow_Butterfly_NH_Icon.png",
  "https://dodo.ac/np/images/b/b6/Tiger_Butterfly_NH_Icon.png",
  "https://dodo.ac/np/images/7/77/Peacock_Butterfly_NH_Icon.png",
  "https://dodo.ac/np/images/2/21/Common_Bluebottle_NH_Icon.png",
  "https://dodo.ac/np/images/9/9e/Paper_Kite_Butterfly_NH_Icon.png",
  "https://dodo.ac/np/images/8/81/Great_Purple_Emperor_NH_Icon.png",
  "https://dodo.ac/np/images/3/38/Monarch_Butterfly_NH_Icon.png",
  "https://dodo.ac/np/images/c/cf/Emperor_Butterfly_NH_Icon.png",
  "https://dodo.ac/np/images/6/60/Agrias_Butterfly_NH_Icon.png",
  "https://dodo.ac/np/images/8/81/Rajah_Brooke%27s_Birdwing_NH_Icon.png",
  "https://dodo.ac/np/images/b/bb/Queen_Alexandra%27s_Birdwing_NH_Icon.png",
  "https://dodo.ac/np/images/a/a0/Moth_NH_Icon.png",
  "https://dodo.ac/np/images/7/7f/Atlas_Moth_NH_Icon.png",
  "https://dodo.ac/np/images/6/69/Madagascan_Sunset_Moth_NH_Icon.png",
  "https://dodo.ac/np/images/9/9d/Long_Locust_NH_Icon.png",
  "https://dodo.ac/np/images/d/d0/Migratory_Locust_NH_Icon.png",
  "https://dodo.ac/np/images/7/78/Rice_Grasshopper_NH_Icon.png",
  "https://dodo.ac/np/images/3/37/Grasshopper_NH_Icon.png",
  "https://dodo.ac/np/images/8/8f/Cricket_NH_Icon.png",
  "https://dodo.ac/np/images/4/4a/Bell_Cricket_NH_Icon.png",
  "https://dodo.ac/np/images/4/4e/Mantis_NH_Icon.png",
  "https://dodo.ac/np/images/a/a7/Orchid_Mantis_NH_Icon.png",
  "https://dodo.ac/np/images/5/51/Honeybee_NH_Icon.png",
  "https://dodo.ac/np/images/a/a5/Wasp_NH_Icon.png",
  "https://dodo.ac/np/images/4/44/Brown_Cicada_NH_Icon.png",
  "https://dodo.ac/np/images/a/a2/Robust_Cicada_NH_Icon.png",
  "https://dodo.ac/np/images/e/e3/Giant_Cicada_NH_Icon.png",
  "https://dodo.ac/np/images/f/f8/Walker_Cicada_NH_Icon.png",
  "https://dodo.ac/np/images/b/ba/Evening_Cicada_NH_Icon.png",
  "https://dodo.ac/np/images/d/d1/Cicada_Shell_NH_Icon.png",
  "https://dodo.ac/np/images/0/09/Red_Dragonfly_NH_Icon.png",
  "https://dodo.ac/np/images/5/5c/Darner_Dragonfly_NH_Icon.png",
  "https://dodo.ac/np/images/3/35/Banded_Dragonfly_NH_Icon.png",
  "https://dodo.ac/np/images/c/c8/Damselfly_NH_Icon.png",
  "https://dodo.ac/np/images/d/d6/Firefly_NH_Icon.png",
  "https://dodo.ac/np/images/4/4f/Mole_Cricket_NH_Icon.png",
  "https://dodo.ac/np/images/1/1f/Pondskater_NH_Icon.png",
  "https://dodo.ac/np/images/7/78/Diving_Beetle_NH_Icon.png",
  "https://dodo.ac/np/images/8/86/Giant_Water_Bug_NH_Icon.png",
  "https://dodo.ac/np/images/4/42/Stinkbug_NH_Icon.png",
  "https://dodo.ac/np/images/a/ac/Man-Faced_Stink_Bug_NH_Icon.png",
  "https://dodo.ac/np/images/0/08/Ladybug_NH_Icon.png",
  "https://dodo.ac/np/images/5/58/Tiger_Beetle_NH_Icon.png",
  "https://dodo.ac/np/images/4/43/Jewel_Beetle_NH_Icon.png",
  "https://dodo.ac/np/images/8/86/Violin_Beetle_NH_Icon.png",
  "https://dodo.ac/np/images/9/9a/Citrus_Long-Horned_Beetle_NH_Icon.png",
  "https://dodo.ac/np/images/7/7c/Rosalia_Batesi_Beetle_NH_Icon.png",
  "https://dodo.ac/np/images/2/20/Blue_Weevil_Beetle_NH_Icon.png",
  "https://dodo.ac/np/images/c/c4/Dung_Beetle_NH_Icon.png",
  "https://dodo.ac/np/images/5/53/Earth-Boring_Dung_Beetle_NH_Icon.png",
  "https://dodo.ac/np/images/e/ee/Scarab_Beetle_NH_Icon.png",
  "https://dodo.ac/np/images/4/48/Drone_Beetle_NH_Icon.png",
  "https://dodo.ac/np/images/3/3e/Goliath_Beetle_NH_Icon.png",
  "https://dodo.ac/np/images/0/03/Saw_Stag_NH_Icon.png",
  "https://dodo.ac/np/images/0/0a/Miyama_Stag_NH_Icon.png",
  "https://dodo.ac/np/images/0/08/Giant_Stag_NH_Icon.png",
  "https://dodo.ac/np/images/f/f7/Rainbow_Stag_NH_Icon.png",
  "https://dodo.ac/np/images/a/a0/Cyclommatus_Stag_NH_Icon.png",
  "https://dodo.ac/np/images/b/ba/Golden_Stag_NH_Icon.png",
  "https://dodo.ac/np/images/c/c7/Giraffe_Stag_NH_Icon.png",
  "https://dodo.ac/np/images/1/10/Horned_Dynastid_NH_Icon.png",
  "https://dodo.ac/np/images/2/2a/Horned_Atlas_NH_Icon.png",
  "https://dodo.ac/np/images/e/ea/Horned_Elephant_NH_Icon.png",
  "https://dodo.ac/np/images/2/21/Horned_Hercules_NH_Icon.png",
  "https://dodo.ac/np/images/5/58/Walking_Stick_NH_Icon.png",
  "https://dodo.ac/np/images/b/b9/Walking_Leaf_NH_Icon.png",
  "https://dodo.ac/np/images/1/17/Bagworm_NH_Icon.png",
  "https://dodo.ac/np/images/5/5d/Ant_NH_Icon.png",
  "https://dodo.ac/np/images/6/6b/Hermit_Crab_NH_Icon.png",
  "https://dodo.ac/np/images/1/1f/Wharf_Roach_NH_Icon.png",
  "https://dodo.ac/np/images/1/15/Fly_NH_Icon.png",
  "https://dodo.ac/np/images/8/84/Mosquito_NH_Icon.png",
  "https://dodo.ac/np/images/8/89/Flea_NH_Icon.png",
  "https://dodo.ac/np/images/e/e9/Snail_NH_Icon.png",
  "https://dodo.ac/np/images/b/b9/Pill_Bug_NH_Icon.png",
  "https://dodo.ac/np/images/d/d2/Centipede_NH_Icon.png",
  "https://dodo.ac/np/images/e/e0/Spider_NH_Icon.png",
  "https://dodo.ac/np/images/b/b5/Tarantula_NH_Icon.png",
  "https://dodo.ac/np/images/9/95/Scorpion_NH_Icon.png",
]; // image addresses (in number order)

// process data ahead of time
const processedFish = csvToArray(FISH_DATA);
const processedBug = csvToArray(BUG_DATA);

// arrays to store found status of each type of data
// this way, found status doesn't get reset when filtering
let fishFound = Array(processedFish.length+1).fill(false);
let bugFound = Array(processedBug.length+1).fill(false);


// DEFAULT SETTINGS

let data = processedFish;
let images = FISH_IMAGE_URLS;
let foundStatus = fishFound;

// display cards when the page is first loaded
document.addEventListener("DOMContentLoaded", processCards);


// DATA FUNCTIONS (i.e. parsing csv)

/**
 * parse imported data for features and create array of objects
 * @param {string} csv_data imported data in the form of a tab/newline separated string
 */
function csvToArray(csv_data) {
  const lines = csv_data.split('\n');
  const headers = lines[0].split('\t');

  // convert each line to an object
  const objArray = lines.slice(1).map(line => {
    const values = line.split('\t');
    let obj = {};

    // create key-value pair from line
    headers.forEach((header, i) => {
      obj[header] = values[i];
    });
    
    return obj;
  });

  objArray.pop(); // removes last empty newline
  console.log(objArray); // for debugging

  return objArray;
}


// DISPLAY FUNCTIONS (i.e. show cards, edit cards)

/**
 * adds and displays card data from object array
 */
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < data.length; i++) {
    let name = data[i].Name.toUpperCase();
    let num = data[i].Num;
    let image = images[num];
    let price = data[i].Price;
    let found = foundStatus[num];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, name, num, image, price, found); // Edit title and image

    // easiest way to access card num property
    nextCard.setAttribute('card-num', num);

    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

/**
 * edit the template card to match each object
 * @param {Node} card the card to be edited in the function
 * @param {string} name the name of the object
 * @param {number} num the number of the object
 * @param {string} image image address of the object icon
 * @param {number} price the price of the object
 * @param {boolean} found true if the card is checked, false otherwise
 */
function editCardContent(card, name, num, image, price, found) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = name;

  const cardImage = card.querySelector("img");
  cardImage.src = image;
  cardImage.alt = name + " Poster";

  const numberElement = card.querySelector("#number");
  numberElement.textContent = num;

  const priceElement = card.querySelector("#price");
  priceElement.textContent = price;

  const checkbox = card.querySelector('.card-checkbox');
  checkbox.checked = found;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", name, "- html: ", card);
}


// DATA FEATURES (i.e. functionality such as search, sort, filter)

/**
 * helper function to get value from dropdown menu
 * @param {string} id specific value we are looking for
 */
function getDropdownValue(id) {
  return document.getElementById(id).value;
}

/**
 * apply sorting and filtering before displaying
 */
function processCards() {
  selectType();
  sortItems();
  filterItems();
  showCards();
}

/**
 * upon selecting a type, display cards of that type
 */
function selectType() {
  const type = getDropdownValue("typeDropdown");

  if (type === "fish") {
    data = processedFish;
    images = FISH_IMAGE_URLS;
    foundStatus = fishFound;
  } else if (type === "bug") {
    data = processedBug;
    images = BUG_IMAGE_URLS;
    foundStatus = bugFound;
  }
}

/**
 * upon selecting sort value, sort array and refresh display
 */
function sortItems() {
  const sortBy = getDropdownValue("sortDropdown");

  if (sortBy === "name") {
    data.sort((a, b) => a.Name.localeCompare(b.Name));
  } else if (sortBy === "number") {
    data.sort((a, b) => a.Num - b.Num);
  } else if (sortBy === "price-descending") {
    data.sort((a, b) => a.Price - b.Price);
  } else if (sortBy === "price-ascending") {
    data.sort((a, b) => b.Price - a.Price);
  }
}

/**
 * upon selecting filter values, filter data
 */
function filterItems() {

  // filter by price
  const priceRange = getDropdownValue("priceDropdown");

  if (priceRange !== "all") {
    data = data.filter(item => {
      if (priceRange === "low") return item.Price < 500;
      if (priceRange === "mid") return item.Price >= 500 && item.Price <= 1000;
      if (priceRange === "high") return item.Price > 1000;
    })
  }

  // filter by color
  const colorFilter = getDropdownValue("colorDropdown");

  if (colorFilter !== "all") {
    data = data.filter(item => item.Color1 === colorFilter);
  }

  // filter by found status
  const foundFilter = getDropdownValue("foundDropdown");

  if (foundFilter !== "all")
  {
    data = data.filter(item => (foundStatus[item.Num] ? "found" : "not-found") === foundFilter)
  }

}

function cardChecked(checkbox) {
  const card = checkbox.closest('.card');
  const num = card.getAttribute('card-num');
  foundStatus[num] = checkbox.checked;
}


// TEST FUNCTIONALITIES (provided functions and early tests of functionality)

/*
function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  //titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh

  console.log(FISH_DATA);
}

function showNumber() {
  let rawData = csvToArray(FISH_DATA);
  let images = FISH_IMAGE_URLS;

  let data = rawData.sort(function(a, b) {
    if (a.Num > b.Num) {
      return 1;
    }
    if (a.Num < b.Num) {
      return -1;
    }
    return 0;
  });;

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < data.length; i++) {
    let name = data[i].Name.toUpperCase();
    image = images[data[i].Num - 1];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, name, image); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

*/