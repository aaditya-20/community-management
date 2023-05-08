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
  recurrence : ''
};

export default function MissionFormData() {
  return formData;
}
