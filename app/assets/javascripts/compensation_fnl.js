$(document).ready(function(){
    var fnlhelp = document.getElementsByClassName("help")[654].style.display = "none";
    var fnlhelp2 = document.getElementsByClassName("help")[659].style.display = "none";

    var fnl1 = $('#final_compensation_info_child_compensation_granted_by_chosen').hide();
    var fnl1a = $('#final_compensation_info_child_compensation_granted_by').parent().siblings().hide();

    var fnl2 = $('#final_compensation_info_child_compensation_granted_on').hide();
    var fnl2a = $('#final_compensation_info_child_compensation_granted_on').parent().siblings().hide();

    var fnl3 = $('#final_compensation_info_child_grounds_for_granting_compensation').hide();
    var fnl3a = $('#final_compensation_info_child_grounds_for_granting_compensation').parent().siblings().hide();

    var fnl4 = $('#final_compensation_info_child_section_under_which_compensation_granted').hide();
    var fnl4a = $('#final_compensation_info_child_section_under_which_compensation_granted').parent().siblings().hide();

    var fnl5 = $('#final_compensation_info_child_amount_granted_in_rupees').hide();
    var fnl5a = $('#final_compensation_info_child_amount_granted_in_rupees').parent().siblings().hide();

    var fnl6 = $('#final_compensation_info_child_compensation_received_in_bank_on').hide();
    var fnl6a = $('#final_compensation_info_child_compensation_received_in_bank_on').parent().siblings().hide();
    
    var fnl7 = $('#final_compensation_info_child_amnt_received_in_bank').hide();
    var fnl7a = $('#final_compensation_info_child_amnt_received_in_bank').parent().siblings().hide();

    var fnl8 = $('#final_compensation_info_child_amount_kept_in_fd').hide();
    var fnl8a = $('#final_compensation_info_child_amount_kept_in_fd').parent().siblings().hide();

    var fnl9 = $('#final_compensation_info_child_amount_at_disposal_of_child_for_immediate_use').hide();
    var fnl9a = $('#final_compensation_info_child_amount_at_disposal_of_child_for_immediate_use').parent().siblings().hide();

    var fnl10 = $('#final_compensation_info_child_reasons_for_rejection_of_compensation').hide();
    var fnl10a = $('#final_compensation_info_child_reasons_for_rejection_of_compensation').parent().siblings().hide();
    

    $("#final_compensation_info_child_final_compensation_application_status").change(function(){	
        var fnl_status = $('#final_compensation_info_child_final_compensation_application_status').find(":selected").text();
        if (fnl_status == "Granted" ){
            fnl1.show();fnl1a.show();
            fnl2.show();fnl2a.show();
            fnl3.show();fnl3a.show();
            fnl4.show();fnl4a.show();
            fnl5.show();fnl5a.show();
            fnl6.show();fnl6a.show();
            fnl7.show();fnl7a.show();
            fnl8.show();fnl8a.show();
            fnl9.show();fnl9a.show();
            fnl10.hide();fnl10a.hide();
        }
        else if (fnl_status == "Rejected") {
            fnl10.show();fnl10a.show();
            fnl1.hide();fnl1a.hide();
            fnl2.hide();fnl2a.hide();
            fnl3.hide();fnl3a.hide();
            fnl4.hide();fnl4a.hide();
            fnl5.hide();fnl5a.hide();
            fnl6.hide();fnl6a.hide();
            fnl7.hide();fnl7a.hide();
            fnl8.hide();fnl8a.hide();
            fnl9.hide();fnl9a.hide();
        } else {
            fnl1.hide();fnl1a.hide();
            fnl2.hide();fnl2a.hide();
            fnl3.hide();fnl3a.hide();
            fnl4.hide();fnl4a.hide();
            fnl5.hide();fnl5a.hide();
            fnl6.hide();fnl6a.hide();
            fnl7.hide();fnl7a.hide();
            fnl8.hide();fnl8a.hide();
            fnl9.hide();fnl9a.hide();
            fnl10.hide();fnl10a.hide();
        }
    });
});