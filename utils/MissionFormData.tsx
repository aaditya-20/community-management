let formData = {
  title: '',
  amount: 0,
  seleted_date: "",
  description: "",
  filename: "",
  wallet_id: " ",
  visibility : '',
  submission_type : '',
  status : '',
  priority : '',
  tags : [{}],
  recurrence : '',
  mission_id:''
};

export default function MissionFormData() {
  return formData;
}
