$(document).ready(function(){
	$("#cp_daily_case_logs_subform_followup").click(function(){	
		var n = 0;
		if(document.getElementsByName("child[cp_daily_case_logs_subform_followup][0][task_caselog]") != null) {
				$('#followupr_child_cp_daily_case_logs_subform_followup_0_task_caselog').change(function (event) {
					var elements1 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_phone_call_messaging_chosen').hide();
					var elements1a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_phone_call_messaging_chosen').parent().siblings().hide();

					var elements2 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_hospital_visit_chosen').hide();
					var elements2a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_hospital_visit_chosen').parent().siblings().hide();

					var elements3 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_court_visit_chosen').hide();
					var elements3a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_court_visit_chosen').parent().siblings().hide();
					
					var elements4 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_cwc_visit_chosen').hide();
					var elements4a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_cwc_visit_chosen').parent().siblings().hide();
					
					var elements5 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_school_visit_chosen').hide();
					var elements5a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_school_visit_chosen').parent().siblings().hide();

					var elements6 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_workplace_visit_chosen').hide();
					var elements6a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_workplace_visit_chosen').parent().siblings().hide();

					var elements7 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_call_in_office_chosen').hide();
					var elements7a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_call_in_office_chosen').parent().siblings().hide();

					var elements8 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_email_daily_case_chosen').hide();
					var elements8a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_email_daily_case_chosen').parent().siblings().hide();

					var elements9 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_sdm_office_chosen').hide();
					var elements9a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_sdm_office_chosen').parent().siblings().hide();

					var elements10 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_shelter_home_visit_chosen').hide();
					var elements10a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_shelter_home_visit_chosen').parent().siblings().hide();

					var elements11 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_dlsa_visit_chosen').hide();
					var elements11a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_dlsa_visit_chosen').parent().siblings().hide();

					var elements12 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_home_visit_chosen').hide();
					var elements12a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_home_visit_chosen').parent().siblings().hide();

					var elements13 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_visit_to_ps_dcp_office_sjpu_chosen').hide();
					var elements13a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_visit_to_ps_dcp_office_sjpu_chosen').parent().siblings().hide();

					var elements14 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_bank_visit_chosen').hide();
					var elements14a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_bank_visit_chosen').parent().siblings().hide();

					var elements16 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_training_for_in_schools_chosen').hide();
					var elements16a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_training_for_in_schools_chosen').parent().siblings().hide();

					var elements17 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_training_for_ngos_chosen').hide();
					var elements17a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_training_for_ngos_chosen').parent().siblings().hide();

					var elements18 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_trainingfordcpudcwstaff_chosen').hide();
					var elements18a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_trainingfordcpudcwstaff_chosen').parent().siblings().hide();

					var elements19 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_interface_with_cwcs_chosen').hide();
					var elements19a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_interface_with_cwcs_chosen').parent().siblings().hide();

					var elements20 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_public_hearing_chosen').hide();
					var elements20a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_public_hearing_chosen').parent().siblings().hide();

					var elements21 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_launch_of_report_chosen').hide();
					var elements21a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_launch_of_report_chosen').parent().siblings().hide();

					var elements22 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_campaign_chosen').hide();
					var elements22a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_campaign_chosen').parent().siblings().hide();

					var elements23 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_conference_workshop_seminar_chosen').hide();
					var elements23a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_conference_workshop_seminar_chosen').parent().siblings().hide();

					var elements24 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_visit_to_msf_chosen').hide();
					var elements24a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_visit_to_msf_chosen').parent().siblings().hide();

					var elements25 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_visit_to_umeed_ki_kiran_chosen').hide();
					var elements25a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_visit_to_umeed_ki_kiran_chosen').parent().siblings().hide();

					var elements26 = $('#followupr_child_cp_daily_case_logs_subform_followup_0_police_station_visit_chosen').hide();
					var elements26a = $('#followupr_child_cp_daily_case_logs_subform_followup_0_police_station_visit_chosen').parent().siblings().hide();

					var conceptName = $('#followupr_child_cp_daily_case_logs_subform_followup_0_task_caselog').find(":selected").text();
					
					if(conceptName =="Phone_Call_Messaging"){
						elements1.show();
						elements1a.show();
					}
					else if(conceptName =="Hospital_Visit"){
						elements2.show();
						elements2a.show();
					}
					else if(conceptName =="Court_Visit"){
						elements3.show();
						elements3a.show();
					}
					else if(conceptName =="CWC_visit "){
						elements4.show();
						elements4a.show();
					}
					else if(conceptName =="School_Visit"){
						elements5.show();
						elements5a.show();
					}
					else if(conceptName =="Workplace_visit "){
						elements6.show();
						elements6a.show();
					}
					else if(conceptName =="Call_in_Office"){
						elements7.show();
						elements7a.show();
					}
					else if(conceptName =="Email"){
						elements8.show();
						elements8a.show();
					}
					else if(conceptName =="SDM_Office"){
						elements9.show();
						elements9a.show();
					}
					else if(conceptName =="Shelter_Home_Visit "){
						elements10.show();
						elements10a.show();
					}
					else if(conceptName =="DLSA_Visit "){
						elements11.show();
						elements11a.show();
					}
					else if(conceptName =="Home_Visit"){
						elements12.show();
						elements12a.show();
					}
					else if(conceptName =="Visit_to_PS_DCP_Office_SJPU"){
						elements13.show();
						elements13a.show();
					}
					else if(conceptName =="Bank_Visit"){
						elements14.show();
						elements14a.show();
					}
					else if(conceptName =="Training_for_in_Schools"){
						elements16.show();
						elements16a.show();
					}
					else if(conceptName =="Training_for_NGOs"){
						elements17.show();
						elements17a.show();
					}
					else if(conceptName =="Training_for_DCPU_DCW_Staff"){
						elements18.show();
						elements18a.show();
					}
					else if(conceptName =="Interface_with_CWCs"){
						elements19.show();
						elements19a.show();
					}
					else if(conceptName =="Public_Hearing"){
						elements20.show();
						elements20a.show();
					}
					else if(conceptName =="Launch_of_Report"){
						elements21.show();
						elements21a.show();
					}
					else if(conceptName =="Campaign"){
						elements22.show();
						elements22a.show();
					}
					else if(conceptName =="Conference_Workshop_Seminar"){
						elements23.show();
						elements23a.show();
					}
					else if(conceptName =="Visit_to_MSF"){
						elements24.show();
						elements24a.show();
					}
					else if(conceptName =="Visit_to_Umeed_Ki_Kiran"){
						elements25.show();
						elements25a.show();
					}
					else if(conceptName =="Police_Station_Visit"){
						elements26.show();
						elements26a.show();
					}
					else{

					}					
				});
		}
	});
});





























/*
$(document).ready(function(){
	$("#cp_daily_case_logs_subform_followup").change(function (event) {
		if(document.getElementsByName("child[cp_daily_case_logs_subform_followup][0][task_caselog]") != null) {
			$("#followupr_child_cp_daily_case_logs_subform_followup_0_task_caselog").on("change",function(event1){
				//if ( this.data-option-array-index == 'Phone_Call_Messaging'){
					console.log("test print",event1);

					//$("#followupr_child_cp_daily_case_logs_subform_followup_0_purpose_one").hide();
					//$("#").show();

				//}
				});
			
		}
	});
});

 https://www.quora.com/How-do-I-show-hide-any-div-element-using-jQuery-or-JavaScript-when-a-different-dropdown-option-is-selected */
