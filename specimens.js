const specimens = [
    {
        "file": "HK03-T1-48-COL.jpg",
        "full_id": "GIUS 3691 HK03",
        "type": "transverse section no. 1",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK03-T2-48-COL.jpg",
        "full_id": "GIUS 3691 HK03",
        "type": "transverse section no. 2",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK03-T3a-48-BW.jpg",
        "full_id": "GIUS 3691 HK03",
        "type": "transverse section no. 3a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK03-T3b-48-COL.jpg",
        "full_id": "GIUS 3691 HK03",
        "type": "transverse section no. 3b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK03-T4a-48-BW.jpg",
        "full_id": "GIUS 3691 HK03",
        "type": "transverse section no. 4a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK03-T4b-48-COL.jpg",
        "full_id": "GIUS 3691 HK03",
        "type": "transverse section no. 4b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK03-T5a-48-BW.jpg",
        "full_id": "GIUS 3691 HK03",
        "type": "transverse section no. 5a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK03-T5b-48-COL.jpg",
        "full_id": "GIUS 3691 HK03",
        "type": "transverse section no. 5b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK03-T6a-48-BW.jpg",
        "full_id": "GIUS 3691 HK03",
        "type": "transverse section no. 6a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK03-T6b-48-COL.jpg",
        "full_id": "GIUS 3691 HK03",
        "type": "transverse section no. 6b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK18-L1-48-BW.jpg",
        "full_id": "GIUS 3691 HK18",
        "type": "longitudinal section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK18-L2-48-BW.jpg",
        "full_id": "GIUS 3691 HK18",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK18-L3-48-BW.jpg",
        "full_id": "GIUS 3691 HK18",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK18-L4-48-BW.jpg",
        "full_id": "GIUS 3691 HK18",
        "type": "longitudinal section no. 4",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK18-T-48-BW.jpg",
        "full_id": "GIUS 3691 HK18",
        "type": "transverse section",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK19-T1-48-BW.jpg",
        "full_id": "GIUS 3691 HK19",
        "type": "transverse section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK19-T2-48-BW.jpg",
        "full_id": "GIUS 3691 HK19",
        "type": "transverse section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK19-T3-48-BW.jpg",
        "full_id": "GIUS 3691 HK19",
        "type": "transverse section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK20-T1-48-BW.jpg",
        "full_id": "GIUS 3691 HK20",
        "type": "transverse section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK20-T2-48-BW.jpg",
        "full_id": "GIUS 3691 HK20",
        "type": "transverse section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK20-T3-48-BW.jpg",
        "full_id": "GIUS 3691 HK20",
        "type": "transverse section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK20-T4-48-BW.jpg",
        "full_id": "GIUS 3691 HK20",
        "type": "transverse section no. 4",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK21-T1-48-BW.jpg",
        "full_id": "GIUS 3691 HK21",
        "type": "transverse section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK21-T2-48-BW.jpg",
        "full_id": "GIUS 3691 HK21",
        "type": "transverse section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK22-T1-48-BW.jpg",
        "full_id": "GIUS 3691 HK22",
        "type": "transverse section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK22-T2-48-BW.jpg",
        "full_id": "GIUS 3691 HK22",
        "type": "transverse section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK22-T3-48-BW.jpg",
        "full_id": "GIUS 3691 HK22",
        "type": "transverse section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK23-L1-48-BW.jpg",
        "full_id": "GIUS 3691 HK23",
        "type": "longitudinal section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK23-L2-48-BW.jpg",
        "full_id": "GIUS 3691 HK23",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK23-L3-48-BW.jpg",
        "full_id": "GIUS 3691 HK23",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK24-F1-48-BW.jpg",
        "full_id": "GIUS 3691 HK24",
        "type": "fragment no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK24-F2-48-BW.jpg",
        "full_id": "GIUS 3691 HK24",
        "type": "fragment no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK24-F3-48-BW.jpg",
        "full_id": "GIUS 3691 HK24",
        "type": "fragment no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK25-F1A-48-BW.jpg",
        "full_id": "GIUS 3691 HK25",
        "type": "fragment no. 1A",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK25-F1B-48-BW.jpg",
        "full_id": "GIUS 3691 HK25",
        "type": "fragment no. 1B",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK25-F2A-48-BW.jpg",
        "full_id": "GIUS 3691 HK25",
        "type": "fragment no. 2A",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK25-F2B-48-BW.jpg",
        "full_id": "GIUS 3691 HK25",
        "type": "fragment no. 2B",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK26-L2-48-BW.jpg",
        "full_id": "GIUS 3691 HK26",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK26-L3-48-BW.jpg",
        "full_id": "GIUS 3691 HK26",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK26-L4-48-BW.jpg",
        "full_id": "GIUS 3691 HK26",
        "type": "longitudinal section no. 4",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK26-L5-48-BW.jpg",
        "full_id": "GIUS 3691 HK26",
        "type": "longitudinal section no. 5",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK26-L6a-48-BW.jpg",
        "full_id": "GIUS 3691 HK26",
        "type": "longitudinal section no. 6a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK26-L6b-24-COL.jpg",
        "full_id": "GIUS 3691 HK26",
        "type": "longitudinal section no. 6b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK26-T1-48-BW.jpg",
        "full_id": "GIUS 3691 HK26",
        "type": "transverse section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK26-T2a-48-BW.jpg",
        "full_id": "GIUS 3691 HK26",
        "type": "transverse section no. 2a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK26-T2b-24-COL.jpg",
        "full_id": "GIUS 3691 HK26",
        "type": "transverse section no. 2b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK27-T1-48-BW.jpg",
        "full_id": "GIUS 3691 HK27",
        "type": "transverse section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK27-T2a-48-BW.jpg",
        "full_id": "GIUS 3691 HK27",
        "type": "transverse section no. 2a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK27-T2b-24-COL.jpg",
        "full_id": "GIUS 3691 HK27",
        "type": "transverse section no. 2b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-L1A-48-BW.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "longitudinal section no. 1A",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-L1B-48-BW.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "longitudinal section no. 1B",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-L2A-48-BW.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "longitudinal section no. 2A",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-L2B-48-BW.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "longitudinal section no. 2B",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-L2C-48-BW.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "longitudinal section no. 2C",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-L2Da-48-BW.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "longitudinal section no. 2Da",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-L2Db-32-BW.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "longitudinal section no. 2Db",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-T1a-48-BW.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "transverse section no. 1a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-T1b-24-COL.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "transverse section no. 1b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-T2-48-BW.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "transverse section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-T3-48-BW.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "transverse section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-T4-48-BW.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "transverse section no. 4",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-T5a-48-BW.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "transverse section no. 5a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK28-T5b-24-COL.jpg",
        "full_id": "GIUS 3691 HK28",
        "type": "transverse section no. 5b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK29-T1a-48-BW.jpg",
        "full_id": "GIUS 3691 HK29",
        "type": "transverse section no. 1a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK29-T1b-24-COL.jpg",
        "full_id": "GIUS 3691 HK29",
        "type": "transverse section no. 1b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK29-T2-48-BW.jpg",
        "full_id": "GIUS 3691 HK29",
        "type": "transverse section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK29-T3-48-BW.jpg",
        "full_id": "GIUS 3691 HK29",
        "type": "transverse section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK30-L1-48-BW.jpg",
        "full_id": "GIUS 3691 HK30",
        "type": "longitudinal section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK30-L2-48-BW.jpg",
        "full_id": "GIUS 3691 HK30",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK30-L3-48-BW.jpg",
        "full_id": "GIUS 3691 HK30",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK30-L4-48-BW.jpg",
        "full_id": "GIUS 3691 HK30",
        "type": "longitudinal section no. 4",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK30-L5a-48-BW.jpg",
        "full_id": "GIUS 3691 HK30",
        "type": "longitudinal section no. 5a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK30-L5b-24-COL.jpg",
        "full_id": "GIUS 3691 HK30",
        "type": "longitudinal section no. 5b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK30-T1a-48-BW.jpg",
        "full_id": "GIUS 3691 HK30",
        "type": "transverse section no. 1a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK30-T1b-24-COL.jpg",
        "full_id": "GIUS 3691 HK30",
        "type": "transverse section no. 1b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK30-T2-48-BW.jpg",
        "full_id": "GIUS 3691 HK30",
        "type": "transverse section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK30-T3a-48-BW.jpg",
        "full_id": "GIUS 3691 HK30",
        "type": "transverse section no. 3a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK30-T3b-24-COL.jpg",
        "full_id": "GIUS 3691 HK30",
        "type": "transverse section no. 3b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK31-L1-48-BW.jpg",
        "full_id": "GIUS 3691 HK31",
        "type": "longitudinal section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK31-L2-48-BW.jpg",
        "full_id": "GIUS 3691 HK31",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK31-L3-48-BW.jpg",
        "full_id": "GIUS 3691 HK31",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK31-L5-48-BW.jpg",
        "full_id": "GIUS 3691 HK31",
        "type": "longitudinal section no. 5",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK31-L6a-48-BW.jpg",
        "full_id": "GIUS 3691 HK31",
        "type": "longitudinal section no. 6a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK31-L6b-24-COL.jpg",
        "full_id": "GIUS 3691 HK31",
        "type": "longitudinal section no. 6b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK31-L7-48-BW.jpg",
        "full_id": "GIUS 3691 HK31",
        "type": "longitudinal section no. 7",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK31-T1-48-BW.jpg",
        "full_id": "GIUS 3691 HK31",
        "type": "transverse section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK31-T2a -48-BW.jpg",
        "full_id": "GIUS 3691 HK31",
        "type": "transverse section no. 2a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK31-T2b -24-COL.jpg",
        "full_id": "GIUS 3691 HK31",
        "type": "transverse section no. 2b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-L1-48-BW.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "longitudinal section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-L2-48-BW.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-L3-48-BW.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-L4-48-BW.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "longitudinal section no. 4",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-L5-48-BW.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "longitudinal section no. 5",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-L6A-48-BW.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "longitudinal section no. 6A",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-L6B-24-COL.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "longitudinal section no. 6B",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-T1a-48-BW.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "transverse section no. 1a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-T1b-32-COL.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "transverse section no. 1b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-T2-48-BW.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "transverse section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-T3a-48-BW.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "transverse section no. 3a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-T3b-24-COL.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "transverse section no. 3b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-T4-48-BW.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "transverse section no. 4",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-T5-48-BW.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "transverse section no. 5",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK52-T6-48-BW.jpg",
        "full_id": "GIUS 3691 HK52",
        "type": "transverse section no. 6",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-L1-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "longitudinal section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-L2-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-L3-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-L4-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "longitudinal section no. 4",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-L5-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "longitudinal section no. 5",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-L6-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "longitudinal section no. 6",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-L7a-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "longitudinal section no. 7a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-L7b-24-COL.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "longitudinal section no. 7b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-T1a-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "transverse section no. 1a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-T1b-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "transverse section no. 1b",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-T1c-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "transverse section no. 1c",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-T2a-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "transverse section no. 2a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-T2b-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "transverse section no. 2b",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-T3-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "transverse section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-T4-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "transverse section no. 4",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-T5a-48-BW.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "transverse section no. 5a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK53-T5b-24-COL.jpg",
        "full_id": "GIUS 3691 HK53",
        "type": "transverse section no. 5b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-L1-48-BW.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "longitudinal section no. 1",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-L2-48-BW.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-L3-48-BW.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-L4-48-BW.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "longitudinal section no. 4",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-L5-48-BW.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "longitudinal section no. 5",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-L6-48-BW.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "longitudinal section no. 6",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-L7a-48-BW.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "longitudinal section no. 7a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-L7b-24-COL.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "longitudinal section no. 7b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-T1a-48-BW.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "transverse section no. 1a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-T1b-48-BW.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "transverse section no. 1b",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-T2-48-BW.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "transverse section no. 2",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-T3-48-BW.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "transverse section no. 3",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-T4a-48-BW.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "transverse section no. 4a",
        "pic_type": "greyscale",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "HK54-T4b-24-COL.jpg",
        "full_id": "GIUS 3691 HK54",
        "type": "transverse section no. 4b",
        "pic_type": "colour",
        "site": "Högklint, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV01-T-48-BW.jpg",
        "full_id": "GIUS 3691 IV01",
        "type": "transverse section",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV02-L1-48-BW.jpg",
        "full_id": "GIUS 3691 IV02",
        "type": "longitudinal section no. 1",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV02-L2-48-BW.jpg",
        "full_id": "GIUS 3691 IV02",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV02-L3-48-BW.jpg",
        "full_id": "GIUS 3691 IV02",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV02-L4-48-BW.jpg",
        "full_id": "GIUS 3691 IV02",
        "type": "longitudinal section no. 4",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV02-L5-48-BW.jpg",
        "full_id": "GIUS 3691 IV02",
        "type": "longitudinal section no. 5",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV02-L6a-48-BW.jpg",
        "full_id": "GIUS 3691 IV02",
        "type": "longitudinal section no. 6a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV02-L6b-24-COL.jpg",
        "full_id": "GIUS 3691 IV02",
        "type": "longitudinal section no. 6b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV02-Ta-48-BW.jpg",
        "full_id": "GIUS 3691 IV02",
        "type": "transverse section no. a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV02-Tb-24-COL.jpg",
        "full_id": "GIUS 3691 IV02",
        "type": "transverse section no. b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV03-L1-48-BW.jpg",
        "full_id": "GIUS 3691 IV03",
        "type": "longitudinal section no. 1",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV03-L2-48-BW.jpg",
        "full_id": "GIUS 3691 IV03",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV03-L3-48-BW.jpg",
        "full_id": "GIUS 3691 IV03",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV03-L4-48-BW.jpg",
        "full_id": "GIUS 3691 IV03",
        "type": "longitudinal section no. 4",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV03-L5-48-BW.jpg",
        "full_id": "GIUS 3691 IV03",
        "type": "longitudinal section no. 5",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV03-L6a-48-BW.jpg",
        "full_id": "GIUS 3691 IV03",
        "type": "longitudinal section no. 6a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV03-L6b-24-COL.jpg",
        "full_id": "GIUS 3691 IV03",
        "type": "longitudinal section no. 6b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV03-Ta-48-BW.jpg",
        "full_id": "GIUS 3691 IV03",
        "type": "transverse section no. a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV03-Tb-24-COL.jpg",
        "full_id": "GIUS 3691 IV03",
        "type": "transverse section no. b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV04-T-48-BW.jpg",
        "full_id": "GIUS 3691 IV04",
        "type": "transverse section",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV05-T-48-BW.jpg",
        "full_id": "GIUS 3691 IV05",
        "type": "transverse section",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV06-T-48-BW.jpg",
        "full_id": "GIUS 3691 IV06",
        "type": "transverse section",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV07-T-48-BW.jpg",
        "full_id": "GIUS 3691 IV07",
        "type": "transverse section",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV08-T1-48-BW.jpg",
        "full_id": "GIUS 3691 IV08",
        "type": "transverse section no. 1",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV08-T2-48-BW.jpg",
        "full_id": "GIUS 3691 IV08",
        "type": "transverse section no. 2",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV13-L1-48-BW.jpg",
        "full_id": "GIUS 3691 IV13",
        "type": "longitudinal section no. 1",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV13-L2-48-BW.jpg",
        "full_id": "GIUS 3691 IV13",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV13-L3a-48-BW.jpg",
        "full_id": "GIUS 3691 IV13",
        "type": "longitudinal section no. 3a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV13-L3b-24-COL.jpg",
        "full_id": "GIUS 3691 IV13",
        "type": "longitudinal section no. 3b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV13-Ta- 48-BW.jpg",
        "full_id": "GIUS 3691 IV13",
        "type": "transverse section no. a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV13-Tb-24-COL.jpg",
        "full_id": "GIUS 3691 IV13",
        "type": "transverse section no. b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV29-L1a-48-BW.jpg",
        "full_id": "GIUS 3691 IV29",
        "type": "longitudinal section no. 1a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV29-L1b-32-COL.jpg",
        "full_id": "GIUS 3691 IV29",
        "type": "longitudinal section no. 1b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV29-L2-48-BW.jpg",
        "full_id": "GIUS 3691 IV29",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV29-L3a-48-BW.jpg",
        "full_id": "GIUS 3691 IV29",
        "type": "longitudinal section no. 3a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV29-L3b-24-COL.jpg",
        "full_id": "GIUS 3691 IV29",
        "type": "longitudinal section no. 3b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV33-L1a-48-BW.jpg",
        "full_id": "GIUS 3691 IV33",
        "type": "longitudinal section no. 1a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV33-L1b-32-COL.jpg",
        "full_id": "GIUS 3691 IV33",
        "type": "longitudinal section no. 1b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV33-L2a-48-BW.jpg",
        "full_id": "GIUS 3691 IV33",
        "type": "longitudinal section no. 2a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV33-L2b-32-COL.jpg",
        "full_id": "GIUS 3691 IV33",
        "type": "longitudinal section no. 2b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV33-L3a-48-BW.jpg",
        "full_id": "GIUS 3691 IV33",
        "type": "longitudinal section no. 3a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV33-L3b-32-COL.jpg",
        "full_id": "GIUS 3691 IV33",
        "type": "longitudinal section no. 3b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV33-L4a-48-BW.jpg",
        "full_id": "GIUS 3691 IV33",
        "type": "longitudinal section no. 4a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV33-L4b-32-COL.jpg",
        "full_id": "GIUS 3691 IV33",
        "type": "longitudinal section no. 4b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV33-L5a-48-BW.jpg",
        "full_id": "GIUS 3691 IV33",
        "type": "longitudinal section no. 5a",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV33-L5b-32-COL.jpg",
        "full_id": "GIUS 3691 IV33",
        "type": "longitudinal section no. 5b",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV33-TTa-48-BW.jpg",
        "full_id": "GIUS 3691 IV33",
        "type": "transverse section no. Ta",
        "pic_type": "greyscale",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "IV33-TTb-32-COL.jpg",
        "full_id": "GIUS 3691 IV33",
        "type": "transverse section no. Tb",
        "pic_type": "colour",
        "site": "Ireviken, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH01-L1a-48-BW.jpg",
        "full_id": "GIUS 3691 LH01",
        "type": "longitudinal section no. 1a",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH01-L1b-32-COL.jpg",
        "full_id": "GIUS 3691 LH01",
        "type": "longitudinal section no. 1b",
        "pic_type": "colour",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH01-L2-48-BW.jpg",
        "full_id": "GIUS 3691 LH01",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH01-L3-48-BW.jpg",
        "full_id": "GIUS 3691 LH01",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH01-L4a-48-BW.jpg",
        "full_id": "GIUS 3691 LH01",
        "type": "longitudinal section no. 4a",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH01-L4b-32-COL.jpg",
        "full_id": "GIUS 3691 LH01",
        "type": "longitudinal section no. 4b",
        "pic_type": "colour",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH01-T1a-48-BW.jpg",
        "full_id": "GIUS 3691 LH01",
        "type": "transverse section no. 1a",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH01-T1b-32-COL.jpg",
        "full_id": "GIUS 3691 LH01",
        "type": "transverse section no. 1b",
        "pic_type": "colour",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH01-T2-48-BW.jpg",
        "full_id": "GIUS 3691 LH01",
        "type": "transverse section no. 2",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH02-L1a-48-BW.jpg",
        "full_id": "GIUS 3691 LH02",
        "type": "longitudinal section no. 1a",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH02-L1b-32-COL.jpg",
        "full_id": "GIUS 3691 LH02",
        "type": "longitudinal section no. 1b",
        "pic_type": "colour",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH02-L2a-48-BW.jpg",
        "full_id": "GIUS 3691 LH02",
        "type": "longitudinal section no. 2a",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH02-L2b-32-COL.jpg",
        "full_id": "GIUS 3691 LH02",
        "type": "longitudinal section no. 2b",
        "pic_type": "colour",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH02-L3-48-BW.jpg",
        "full_id": "GIUS 3691 LH02",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH02-L4-48-BW.jpg",
        "full_id": "GIUS 3691 LH02",
        "type": "longitudinal section no. 4",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH02-L5a-48-BW.jpg",
        "full_id": "GIUS 3691 LH02",
        "type": "longitudinal section no. 5a",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH02-L5b-32-COL.jpg",
        "full_id": "GIUS 3691 LH02",
        "type": "longitudinal section no. 5b",
        "pic_type": "colour",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH02-T1a-48-BW.jpg",
        "full_id": "GIUS 3691 LH02",
        "type": "transverse section no. 1a",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH02-T1b-32-COL.jpg",
        "full_id": "GIUS 3691 LH02",
        "type": "transverse section no. 1b",
        "pic_type": "colour",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH02-T2-48-BW.jpg",
        "full_id": "GIUS 3691 LH02",
        "type": "transverse section no. 2",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH02-T3-48-BW.jpg",
        "full_id": "GIUS 3691 LH02",
        "type": "transverse section no. 3",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH16-F1-48-BW.jpg",
        "full_id": "GIUS 3691 LH16",
        "type": "fragment no. 1",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH16-F2-48-BW.jpg",
        "full_id": "GIUS 3691 LH16",
        "type": "fragment no. 2",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH17-L1-48-BW.jpg",
        "full_id": "GIUS 3691 LH17",
        "type": "longitudinal section no. 1",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH17-L2-48-BW.jpg",
        "full_id": "GIUS 3691 LH17",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH17-L3-49-BW.jpg",
        "full_id": "GIUS 3691 LH17",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH17-L4-48-BW.jpg",
        "full_id": "GIUS 3691 LH17",
        "type": "longitudinal section no. 4",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH17-L5-48-BW.jpg",
        "full_id": "GIUS 3691 LH17",
        "type": "longitudinal section no. 5",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH17-L6a-48-BW.jpg",
        "full_id": "GIUS 3691 LH17",
        "type": "longitudinal section no. 6a",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH17-L6b-32-COL.jpg",
        "full_id": "GIUS 3691 LH17",
        "type": "longitudinal section no. 6b",
        "pic_type": "colour",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH17-T1-48-BW.jpg",
        "full_id": "GIUS 3691 LH17",
        "type": "transverse section no. 1",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH17-T2a-48-BW.jpg",
        "full_id": "GIUS 3691 LH17",
        "type": "transverse section no. 2a",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH17-T2b-32-COL.jpg",
        "full_id": "GIUS 3691 LH17",
        "type": "transverse section no. 2b",
        "pic_type": "colour",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH19-L1-48-BW.jpg",
        "full_id": "GIUS 3691 LH19",
        "type": "longitudinal section no. 1",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH19-L2-48-BW.jpg",
        "full_id": "GIUS 3691 LH19",
        "type": "longitudinal section no. 2",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH19-L3-48-BW.jpg",
        "full_id": "GIUS 3691 LH19",
        "type": "longitudinal section no. 3",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH19-L4-48-BW.jpg",
        "full_id": "GIUS 3691 LH19",
        "type": "longitudinal section no. 4",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH19-L5a-48-BW.jpg",
        "full_id": "GIUS 3691 LH19",
        "type": "longitudinal section no. 5a",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH19-L5b-32-COL.jpg",
        "full_id": "GIUS 3691 LH19",
        "type": "longitudinal section no. 5b",
        "pic_type": "colour",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH19-L6-48-BW.jpg",
        "full_id": "GIUS 3691 LH19",
        "type": "longitudinal section no. 6",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH19-T1-48-BW.jpg",
        "full_id": "GIUS 3691 LH19",
        "type": "transverse section no. 1",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH19-T2a-48-BW.jpg",
        "full_id": "GIUS 3691 LH19",
        "type": "transverse section no. 2a",
        "pic_type": "greyscale",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    },
    {
        "file": "LH19-T2b-32-COL.jpg",
        "full_id": "GIUS 3691 LH19",
        "type": "transverse section no. 2b",
        "pic_type": "colour",
        "site": "Lickershamn, Gotland, Sweden, Upper Visby Beds, Silurian"
    }
];