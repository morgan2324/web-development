const hostels = [
    {
        university: "Uganda Christian University",
        hostels: [
            { name: "Little Angels Hostel", address: "Bugujju." , contact: "001"},
            { name: "Pameja Girls Hostel", address: "Wandegeya.", contact: "002" }
        ]
    },
    {
        university: "Makerere University",
        hostels: [
            { name: "Olympia Hostel", address: "kikoni." , contact: "003" },
            { name: "Dream World Hostel", address: "Kikoni." , contact: "004"}
        ]
    },
    {
        university: "Kyambogo University",
        hostels: [
            { name: "Bavana Hostel", address: "Banda.", contact: "005" },
            { name: "Kabojja Hostel", address: "Banda." , contact: "007"}
        ]
    }
];

function searchHostels() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const matchedUniversity = hostels.find(uni => 
        uni.university.toLowerCase().includes(searchInput)
    );

    if (matchedUniversity) {
        matchedUniversity.hostels.forEach(hostel => {
            const hostelInfo = document.createElement("div");
            hostelInfo.innerHTML = <><h3>${hostel.name}</h3><p>${hostel.address}</p><p>${hostel.contact}</p></>;
            resultsDiv.appendChild(hostelInfo);
        });
    } else {
        resultsDiv.innerHTML = "<p>No hostels found near this university.</p>";
    }
}
	
