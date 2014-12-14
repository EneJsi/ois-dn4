
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';

var username = "ois.seminar";
var password = "ois4fri";

//json file za male in femal BMI po drzavah.. QUANDL API :D
//tu se moj token iz quandla vidi.. pa un in pw od ehr? Change that?
var urlMaleJson = 'http://quandl.com/api/v1/multisets.json?trim_start=2009-12-31&trim_end=2009-12-31&auth_token=jmjzxxsnKYk9ypHHSz4R&columns=WHO.908_AFG.1,WHO.908_ALB.1,WHO.908_DZA.1,WHO.908_AGO.1,WHO.908_ATG.1,WHO.908_ARG.1,WHO.908_ARM.1,WHO.908_AUS.1,WHO.908_AUT.1,WHO.908_AZE.1,WHO.908_BHR.1,WHO.908_BGD.1,WHO.908_BRB.1,WHO.908_BLR.1,WHO.908_BEL.1,WHO.908_BLZ.1,WHO.908_BEN.1,WHO.908_BTN.1,WHO.908_BOL.1,WHO.908_BIH.1,WHO.908_BWA.1,WHO.908_BRA.1,WHO.908_BRN.1,WHO.908_BGR.1,WHO.908_BFA.1,WHO.908_BDI.1,WHO.908_KHM.1,WHO.908_CMR.1,WHO.908_CAN.1,WHO.908_CPV.1,WHO.908_CAF.1,WHO.908_TCD.1,WHO.908_CHL.1,WHO.908_CHN.1,WHO.908_COL.1,WHO.908_COM.1,WHO.908_COD.1,WHO.908_COG.1,WHO.908_CRI.1,WHO.908_HRV.1,WHO.908_CUB.1,WHO.908_CYP.1,WHO.908_CZE.1,WHO.908_DNK.1,WHO.908_DJI.1,WHO.908_DMA.1,WHO.908_DOM.1,WHO.908_ECU.1,WHO.908_EGY.1,WHO.908_SLV.1,WHO.908_GNQ.1,WHO.908_ERI.1,WHO.908_EST.1,WHO.908_ETH.1,WHO.908_FJI.1,WHO.908_FIN.1,WHO.908_FRA.1,WHO.908_GAB.1,WHO.908_GMB.1,WHO.908_GEO.1,WHO.908_DEU.1,WHO.908_GHA.1,WHO.908_GRC.1,WHO.908_GRD.1,WHO.908_GTM.1,WHO.908_GIN.1,WHO.908_GNB.1,WHO.908_GUY.1,WHO.908_HTI.1,WHO.908_HND.1,WHO.908_HUN.1,WHO.908_ISL.1,WHO.908_IND.1,WHO.908_IDN.1,WHO.908_IRN.1,WHO.908_IRQ.1,WHO.908_IRL.1,WHO.908_ISR.1,WHO.908_ITA.1,WHO.908_CIV.1,WHO.908_JAM.1,WHO.908_JPN.1,WHO.908_JOR.1,WHO.908_KAZ.1,WHO.908_KEN.1,WHO.908_KIR.1,WHO.908_KWT.1,WHO.908_KGZ.1,WHO.908_LAO.1,WHO.908_LVA.1,WHO.908_LBN.1,WHO.908_LSO.1,WHO.908_LBR.1,WHO.908_LBY.1,WHO.908_LTU.1,WHO.908_LUX.1,WHO.908_MKD.1,WHO.908_MDG.1,WHO.908_MWI.1,WHO.908_MYS.1,WHO.908_MDV.1,WHO.908_MLI.1,WHO.908_MLT.1,WHO.908_MRT.1,WHO.908_MUS.1,WHO.908_MEX.1,WHO.908_MDA.1,WHO.908_MNG.1,WHO.908_MNE.1,WHO.908_MAR.1,WHO.908_MOZ.1,WHO.908_MMR.1,WHO.908_NAM.1,WHO.908_NPL.1,WHO.908_NLD.1,WHO.908_NZL.1,WHO.908_NIC.1,WHO.908_NER.1,WHO.908_NGA.1,WHO.908_PRK.1,WHO.908_NOR.1,WHO.908_OMN.1,WHO.908_PAK.1,WHO.908_PAN.1,WHO.908_PNG.1,WHO.908_PRY.1,WHO.908_PER.1,WHO.908_PHL.1,WHO.908_POL.1,WHO.908_PRT.1,WHO.908_QAT.1,WHO.908_ROU.1,WHO.908_RUS.1,WHO.908_RWA.1,WHO.908_KNA.1,WHO.908_LCA.1,WHO.908_VCT.1,WHO.908_WSM.1,WHO.908_STP.1,WHO.908_SAU.1,WHO.908_SEN.1,WHO.908_SRB.1,WHO.908_SYC.1,WHO.908_SLE.1,WHO.908_SGP.1,WHO.908_SVK.1,WHO.908_SVN.1,WHO.908_SLB.1,WHO.908_SOM.1,WHO.908_ZAF.1,WHO.908_KOR.1,WHO.908_ESP.1,WHO.908_LKA.1,WHO.908_SDN.1,WHO.908_SUR.1,WHO.908_SWZ.1,WHO.908_SWE.1,WHO.908_CHE.1,WHO.908_SYR.1,WHO.908_TJK.1,WHO.908_TZA.1,WHO.908_THA.1,WHO.908_BHS.1,WHO.908_TLS.1,WHO.908_TGO.1,WHO.908_TON.1,WHO.908_TTO.1,WHO.908_TUN.1,WHO.908_TUR.1,WHO.908_TKM.1,WHO.908_ARE.1,WHO.908_UGA.1,WHO.908_GBR.1,WHO.908_UKR.1,WHO.908_URY.1,WHO.908_USA.1,WHO.908_UZB.1,WHO.908_VUT.1,WHO.908_VEN.1,WHO.908_VNM.1,WHO.908_YEM.1,WHO.908_ZMB.1,WHO.908_ZWE.1'
var urlFemaleJson = 'http://quandl.com/api/v1/multisets.json?trim_start=2009-12-31&trim_end=2009-12-31&auth_token=jmjzxxsnKYk9ypHHSz4R&columns=WHO.908_AFG.1,WHO.908_ALB.1,WHO.908_DZA.1,WHO.908_AGO.1,WHO.908_ATG.1,WHO.908_ARG.1,WHO.908_ARM.1,WHO.908_AUS.1,WHO.908_AUT.1,WHO.908_AZE.1,WHO.908_BHR.1,WHO.908_BGD.1,WHO.908_BRB.1,WHO.908_BLR.1,WHO.908_BEL.1,WHO.908_BLZ.1,WHO.908_BEN.1,WHO.908_BTN.1,WHO.908_BOL.1,WHO.908_BIH.1,WHO.908_BWA.1,WHO.908_BRA.1,WHO.908_BRN.1,WHO.908_BGR.1,WHO.908_BFA.1,WHO.908_BDI.1,WHO.908_KHM.1,WHO.908_CMR.1,WHO.908_CAN.1,WHO.908_CPV.1,WHO.908_CAF.1,WHO.908_TCD.1,WHO.908_CHL.1,WHO.908_CHN.1,WHO.908_COL.1,WHO.908_COM.1,WHO.908_COD.1,WHO.908_COG.1,WHO.908_CRI.1,WHO.908_HRV.1,WHO.908_CUB.1,WHO.908_CYP.1,WHO.908_CZE.1,WHO.908_DNK.1,WHO.908_DJI.1,WHO.908_DMA.1,WHO.908_DOM.1,WHO.908_ECU.1,WHO.908_EGY.1,WHO.908_SLV.1,WHO.908_GNQ.1,WHO.908_ERI.1,WHO.908_EST.1,WHO.908_ETH.1,WHO.908_FJI.1,WHO.908_FIN.1,WHO.908_FRA.1,WHO.908_GAB.1,WHO.908_GMB.1,WHO.908_GEO.1,WHO.908_DEU.1,WHO.908_GHA.1,WHO.908_GRC.1,WHO.908_GRD.1,WHO.908_GTM.1,WHO.908_GIN.1,WHO.908_GNB.1,WHO.908_GUY.1,WHO.908_HTI.1,WHO.908_HND.1,WHO.908_HUN.1,WHO.908_ISL.1,WHO.908_IND.1,WHO.908_IDN.1,WHO.908_IRN.1,WHO.908_IRQ.1,WHO.908_IRL.1,WHO.908_ISR.1,WHO.908_ITA.1,WHO.908_CIV.1,WHO.908_JAM.1,WHO.908_JPN.1,WHO.908_JOR.1,WHO.908_KAZ.1,WHO.908_KEN.1,WHO.908_KIR.1,WHO.908_KWT.1,WHO.908_KGZ.1,WHO.908_LAO.1,WHO.908_LVA.1,WHO.908_LBN.1,WHO.908_LSO.1,WHO.908_LBR.1,WHO.908_LBY.1,WHO.908_LTU.1,WHO.908_LUX.1,WHO.908_MKD.1,WHO.908_MDG.1,WHO.908_MWI.1,WHO.908_MYS.1,WHO.908_MDV.1,WHO.908_MLI.1,WHO.908_MLT.1,WHO.908_MRT.1,WHO.908_MUS.1,WHO.908_MEX.1,WHO.908_MDA.1,WHO.908_MNG.1,WHO.908_MNE.1,WHO.908_MAR.1,WHO.908_MOZ.1,WHO.908_MMR.1,WHO.908_NAM.1,WHO.908_NPL.1,WHO.908_NLD.1,WHO.908_NZL.1,WHO.908_NIC.1,WHO.908_NER.1,WHO.908_NGA.1,WHO.908_PRK.1,WHO.908_NOR.1,WHO.908_OMN.1,WHO.908_PAK.1,WHO.908_PAN.1,WHO.908_PNG.1,WHO.908_PRY.1,WHO.908_PER.1,WHO.908_PHL.1,WHO.908_POL.1,WHO.908_PRT.1,WHO.908_QAT.1,WHO.908_ROU.1,WHO.908_RUS.1,WHO.908_RWA.1,WHO.908_KNA.1,WHO.908_LCA.1,WHO.908_VCT.1,WHO.908_WSM.1,WHO.908_STP.1,WHO.908_SAU.1,WHO.908_SEN.1,WHO.908_SRB.1,WHO.908_SYC.1,WHO.908_SLE.1,WHO.908_SGP.1,WHO.908_SVK.1,WHO.908_SVN.1,WHO.908_SLB.1,WHO.908_SOM.1,WHO.908_ZAF.1,WHO.908_KOR.1,WHO.908_ESP.1,WHO.908_LKA.1,WHO.908_SDN.1,WHO.908_SUR.1,WHO.908_SWZ.1,WHO.908_SWE.1,WHO.908_CHE.1,WHO.908_SYR.1,WHO.908_TJK.1,WHO.908_TZA.1,WHO.908_THA.1,WHO.908_BHS.1,WHO.908_TLS.1,WHO.908_TGO.1,WHO.908_TON.1,WHO.908_TTO.1,WHO.908_TUN.1,WHO.908_TUR.1,WHO.908_TKM.1,WHO.908_ARE.1,WHO.908_UGA.1,WHO.908_GBR.1,WHO.908_UKR.1,WHO.908_URY.1,WHO.908_USA.1,WHO.908_UZB.1,WHO.908_VUT.1,WHO.908_VEN.1,WHO.908_VNM.1,WHO.908_YEM.1,WHO.908_ZMB.1,WHO.908_ZWE.1'

//preloadam JSON BMI za male in female. Pred tem se vnesem tabelico slovenskih imen drzav. Ker smo v Sloveniji. 183 drzav. Prof. za slovenscino iz srednje sole bi bila zelo zadovoljna ;) 
//ZGORNJI API KLICI  NE DELAJO VEC. NORMALNO SO DELALI SE V SREDO. BAKCUP PLAN BO LE KLIC ZA SLOVENIJO.
var urlSlo = 'https://www.quandl.com/api/v1/datasets/WHO/905_SVN.json?auth_token=jmjzxxsnKYk9ypHHSz4R'

var drzave = [
		"Afganistan",
		"Albanija",
		"Alzirija",
		"Angola",
		"Antigva in Barbuda",
		"Argentina",
		"Armenija",
		"Austrailja",
		"Avstrija",
		"Azerbajdzan",
		"Bahrajn",
		"Banglades",
		"Barbados",
		"Belorusija",
		"Belgija",
		"Belize",
		"Benin",
		"Butan",
		"Bolivija",
		"BIH",
		"Bocvana",
		"Brazilija",
		"Bruneji",
		"Bulgarija",
		"Burkina Faso",
		"Burundi",
		"Cambodza",
		"Kamerun",
		"Kanada",
		"Zelenortski otoki", //WTF? :D
		"Centralnoafriska republika",
		"Cad",
		"Cile",
		"Kitajska",
		"Kolumbija",
		"Komori",
		"Kongo",
		"Republika Kongo",
		"Kostarika",
		"Hrvaska",
		"Kuba",
		"Ciper",
		"Ceska",
		"Danska",
		"Dzibuti",
		"Dominika",
		"Dominikanska republika",
		"Ekvador",
		"Egipt",
		"Salvador",
		"Ekvatorialna Gvineja",
		"Eritreja",
		"Estonija",
		"Etiopija",
		"Fiji",
		"Finska",
		"Francija",
		"Gabon",
		"Gambija",
		"Georgija",
		"Nemcija",
		"Gana",
		"Grcija",
		"Grenada",
		"Gvatemala",
		"Gvineja",
		"Gvineja Bisseau",
		"Gvajana",
		"Haiti",
		"Honduras",
		"Madzarska",
		"Islandija",
		"Indija",
		"Indonezija",
		"Iran",
		"Irak",
		"Irska",
		"Izrael",
		"Italija",
		"Slonokoscena obala",
		"Jamajka",
		"Japonska",
		"Jordanija",
		"Kazakstan",
		"Kenija",
		"Kiribati",
		"Kuvajt",
		"Kirgizistan",
		"Laos",
		"Latvija",
		"Libanon",
		"Lesoto",
		"Liberija",
		"Libija",
		"Litva",
		"Luxemburg",
		"Makedonija",
		"Madagaskar",
		"Malavi",
		"Malezija",
		"Maldivija",
		"Mali",
		"Malta",
		"Mavretanija",
		"Mauritius",
		"Mehika",
		"Moldavija",
		"Mongolija",
		"Crna gora",
		"Maroko",
		"Mozambik",
		"Mjanmar",
		"Namibija",
		"Nepal",
		"Nizozemska",
		"Nova Zelandija",
		"Nikaragva",
		"Niger",
		"Nigerija",
		"Severna Koreja",
		"Norveska",
		"Oman",
		"Pakistan",
		"Panama",
		"Papua nova Gvineja",
		"Paragvaj",
		"Peru",
		"Filipini",
		"Poljska",
		"Portugalska",
		"Katar",
		"Romunija",
		"Rusija",
		"Ruanda",
		"Saint kitts in Nevis", //wtf again
		"Saint Lucia",
		"Sveti Vincent in Grenadini", //more wtf.. moja geografija.. SUCKS
		"Samoa",
		"Sao Tome in Principe",
		"Savdska Arabija",
		"Senegal",
		"Srbija",
		"Sejseli",
		"Sierra Leon",
		"Singapur",
		"Slovaska",
		"Slovenija", //worth it 
		"Salomonovi otoki",
		"Somalija",
		"Republika juzna Afrika",
		"Juzna Koreja",
		"Spanija",
		"Srilanka",
		"Sudan",
		"Surinam",
		"Svazi",
		"Svedska",
		"Svica",
		"Sirija",
		"Tadzikistan",
		"Tanzanija",
		"Tajska",
		"Bahami",
		"Vzhodni Timor",
		"Togo",
		"Tonga",
		"Trinidad in Tobago",
		"Tunizija",
		"Turcija",
		"Turkmenistan",
		"Zdruzeni Arabski emirati",
		"Uganda",
		"Velika Britanija",
		"Ukrajina",
		"Urugvaj",
		"ZDA",
		"Uzbekistan",
		"Vanuatu",
		"Venezuela",
		"Vietnam",
		"Jemen",
		"Zambija",
		"Zimbabve"
	];
/*
var i = 0;
while(drzave[i] != '-5'){
	i++;
}
console.log("Napisal si" + i + "drzav.");*/

var BMI;
var height;
var weight;
var maleJsonBMI = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': urlMaleJson,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

var sloBMI = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': urlSlo,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
       
    return json;
})(); 



var femaleJsonBMI = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': urlFemaleJson,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 


console.log(sloBMI);
console.log(sloBMI.data[0][1]);
function getSessionId() {
    var response = $.ajax({
        type: "POST",
        url: baseUrl + "/session?username=" + encodeURIComponent(username) +
                "&password=" + encodeURIComponent(password),
        async: false
    });

    return response.responseJSON.sessionId;
}


function BmiIzracun() {
	sessionId = getSessionId();

	var ehrId = $("#preberiEHRid").val();

	if (!ehrId || ehrId.trim().length == 0) {
		$("#preberiSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} 

		//party
		$.ajax({
			url: baseUrl + "/demographics/ehr/" + ehrId + "/party",
	    	type: 'GET',
	    	headers: {"Ehr-Session": sessionId},
	    	success: function (data) {
				var party = data.party;
					//teza
					$("#rezultatBMI").html("<br/><span>Oseba <b>" + party.firstNames + " " + party.lastNames +","+ "</b></span><br/><br/>");
					$.ajax({
					    url: baseUrl + "/view/" + ehrId + "/" + "weight",
					    type: 'GET',
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	if(res.length > 0) {
					    		for(var i in res){
						        weight = res[i].weight;
						        console.log(weight + "na mestu" +i);
					    		}
						        console.log(weight + "To je teza nazadnje dodanega")
					    	} 
					    },
					    error: function() {
					    	$("#preberiSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
							console.log(JSON.parse(err.responseText).userMessage);
					    }
					});		
					//visina
					
					$.ajax({
						url: baseUrl + "/view/" + ehrId + "/" + "height",
					    type: 'GET',
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	if (res.length > 0) {
						        height = res[0].height;
					    	} 
					BMI = (weight / (height*height) * 10000);
					console.log(weight);
					console.log(height);
					console.log(BMI);
					if(isNaN(BMI)){
							$("#preberiSporocilo").html("<span class='obvestilo label label-danger fade-in'>Vnesite meritve telesne teže ter višine.");
					}else{
					    var results = "BMI: " + BMI  + "<br>Povprečen slovenski BMI: " + sloBMI.data[0][1];
							if(BMI < 18.5){
					       		results += "<br><span class='label label-danger'>Imate prenizko telesno težo. Bolje morate skrbeti zase!</span>";
							}else if(BMI < 25){
				       			results += "<br><span class='label label-success'>Čestitam. Lepo skrbite za svojo težo.!</span>";
							}else{
				       			results += "<br><span class='label label-danger'>Imate prekomerno telesno težo. Bolje morate skrbeti zase!</span>";
				    }
				   
					$("#rezultatBMI").append(results);
					var krogciRes = "<div class='col-lg-6 col-md-6 col-sm-6'><div class='panel panel-default'><div class='panel-heading'><div class='row'><div class='col-lg-6 col-md-6 col-sm-6'><b>Slovenija in vi</b></div></div></div>";				
					krogciRes += "<div class='panel-body text-center'><svg width='720' height='120'><circle cx='40' cy='60' r='10'></circle></svg></div></div></div>";
					$("#krogciKROGCIkrogciiiIII").append(krogciRes);
					
					
					}
					    },
					    error: function() {
					    	$("#preberiSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
							console.log(JSON.parse(err.responseText).userMessage);
					    }
					});	
					

					
	    	},
	    	error: function(err) {
	    		$("#preberiSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
	    	}
		});
	
					
}



function kreirajEHRzaBolnika() {
	sessionId = getSessionId();
	var ime = $("#kreirajIme").val();
	var priimek = $("#kreirajPriimek").val();
	var spol = $("kreirajSpol").val();
	

	
	if (!ime || !priimek || ime.trim().length == 0 || priimek.trim().length == 0 ) {
		$("#kreirajSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>");
	} else {
		$.ajaxSetup({
		    headers: {"Ehr-Session": sessionId}
		});
		$.ajax({
		    url: baseUrl + "/ehr",
		    type: 'POST',
		    success: function (data) {
		        var ehrId = data.ehrId;
		        if(document.getElementById('MALE').checked) {
						spol = 'MALE';
				}
				else{
						spol = 'FEMALE';
				}
		        var partyData = {
		            firstNames: ime,
		            lastNames: priimek,
		            gender: spol,
		            partyAdditionalInfo: [{key: "ehrId", value: ehrId}]
		        };
		        //console.log(spol);
		        $.ajax({
		            url: baseUrl + "/demographics/party",
		            type: 'POST',
		            contentType: 'application/json',
		            data: JSON.stringify(partyData),
		            success: function (party) {
		                if (party.action == 'CREATE') {
		                    $("#kreirajSporocilo").html("<span class='obvestilo label label-success fade-in'>Uspešno kreiran EHR '" + ehrId + "'.</span>");
		                    console.log("Uspešno kreiran EHR '" + ehrId + "'.");
		                    $("#preberiEHRid").val(ehrId);
		                }
		            },
		            error: function(err) {
		            	$("#kreirajSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
		            	console.log(JSON.parse(err.responseText).userMessage);
		            }
		        });
		    }
		});
	}
}



function dodajMeritveVitalnihZnakov() {
	sessionId = getSessionId();

	var ehrId = $("#dodajVitalnoEHR").val();
	var datumInUra = $("#dodajVitalnoDatumInUra").val();
	var telesnaVisina = $("#dodajVitalnoTelesnaVisina").val();
	var telesnaTeza = $("#dodajVitalnoTelesnaTeza").val();


	if (!ehrId || ehrId.trim().length == 0) {
		$("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>");
	} else {
		$.ajaxSetup({
		    headers: {"Ehr-Session": sessionId}
		});
		var podatki = {
			// Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
		    "ctx/language": "en",
		    "ctx/territory": "SI",
		    "ctx/time": datumInUra,
		    "vital_signs/height_length/any_event/body_height_length": telesnaVisina,
		    "vital_signs/body_weight/any_event/body_weight": telesnaTeza,

		};
		var parametriZahteve = {
		    "ehrId": ehrId,
		    templateId: 'Vital Signs',
		    format: 'FLAT',
		};
		$.ajax({
		    url: baseUrl + "/composition?" + $.param(parametriZahteve),
		    type: 'POST',
		    contentType: 'application/json',
		    data: JSON.stringify(podatki),
		    success: function (res) {
		    	console.log(res.meta.href);
		        $("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-success fade-in'>" + res.meta.href + ".</span>");
		    },
		    error: function(err) {
		    	$("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
		    }
		});
	}
}





$(document).ready(function() {
	$('#preberiObstojeciEHR').change(function() {
		$("#preberiSporocilo").html("");
		$("#preberiEHRid").val($(this).val());
		$("#rezultatBMI").html("");
	});
	$('#preberiObstojeciVitalniZnak').change(function() {
		$("#dodajMeritveVitalnihZnakovSporocilo").html("");
		var podatki = $(this).val().split("|");
		$("#dodajVitalnoEHR").val(podatki[0]);
		$("#dodajVitalnoDatumInUra").val(podatki[1]);
		$("#dodajVitalnoTelesnaVisina").val(podatki[2]);
		$("#dodajVitalnoTelesnaTeza").val(podatki[3]);
	});
});