$(document).ready(function(){
    var checkhelp = document.getElementsByClassName("help")[641].style.display = "none";
    var checkhelp2 = document.getElementsByClassName("help")[646].style.display = "none";

    var check1 = $('#interim_compensation_info_child_compensation_granted_on').hide();
    var check1a = $('#interim_compensation_info_child_compensation_granted_on').parent().siblings().hide();

    var check2 = $('#interim_compensation_info_child_compensation_granted_by_chosen').hide();
    var check2a = $('#interim_compensation_info_child_compensation_granted_by').parent().siblings().hide();

    var check3 = $('#interim_compensation_info_child_grounds_for_granting_compensation').hide();
    var check3a = $('#interim_compensation_info_child_grounds_for_granting_compensation').parent().siblings().hide();

    var check4 = $('#interim_compensation_info_child_section_under_which_compensation_granted').hide();
    var check4a = $('#interim_compensation_info_child_section_under_which_compensation_granted').parent().siblings().hide();

    var check5 = $('#interim_compensation_info_child_amount_granted_in_rupees').hide();
    var check5a = $('#interim_compensation_info_child_amount_granted_in_rupees').parent().siblings().hide();

    var check6 = $('#interim_compensation_info_child_compensation_received_in_bank_on').hide();
    var check6a = $('#interim_compensation_info_child_compensation_received_in_bank_on').parent().siblings().hide();
    
    var check7 = $('#interim_compensation_info_child_amnt_received_in_bank').hide();
    var check7a = $('#interim_compensation_info_child_amnt_received_in_bank').parent().siblings().hide();

    var check8 = $('#interim_compensation_info_child_amount_kept_in_fd').hide();
    var check8a = $('#interim_compensation_info_child_amount_kept_in_fd').parent().siblings().hide();

    var check9 = $('#interim_compensation_info_child_amount_at_disposal_of_child_for_immediate_use').hide();
    var check9a = $('#interim_compensation_info_child_amount_at_disposal_of_child_for_immediate_use').parent().siblings().hide();

    var check10 = $('#interim_compensation_info_child_reasons_for_rejection_of_interim_compensation').hide();
    var check10a = $('#interim_compensation_info_child_reasons_for_rejection_of_interim_compensation').parent().siblings().hide();

    $("#interim_compensation_info_child_interim_compensation_status").change(function(){	
        var status = $('#interim_compensation_info_child_interim_compensation_status').find(":selected").text();
        if (status == "Granted" ){
            check1.show();check1a.show();
            check2.show();check2a.show();
            check3.show();check3a.show();
            check4.show();check4a.show();
            check5.show();check5a.show();
            check6.show();check6a.show();
            check7.show();check7a.show();
            check8.show();check8a.show();
            check9.show();check9a.show();
            check10.hide();check10a.hide();

        }
        else if (status == "Rejected") {
            check10.show();check10a.show();
            check1.hide();check1a.hide();
            check2.hide();check2a.hide();
            check3.hide();check3a.hide();
            check4.hide();check4a.hide();
            check5.hide();check5a.hide();
            check6.hide();check6a.hide();
            check7.hide();check7a.hide();
            check8.hide();check8a.hide();
            check9.hide();check9a.hide();
        } else {
            check1.hide();check1a.hide();
            check2.hide();check2a.hide();
            check3.hide();check3a.hide();
            check4.hide();check4a.hide();
            check5.hide();check5a.hide();
            check6.hide();check6a.hide();
            check7.hide();check7a.hide();
            check8.hide();check8a.hide();
            check9.hide();check9a.hide();
            check10.hide();check10a.hide();
        }
    });
});