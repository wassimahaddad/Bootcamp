let person = {
  jobTitle: "fictional character",
  location: "the jungle",
  partnerName: "Jane",
  numberOfChildren: "one",
};

function fortuneTeller(n) {
  let text = `You will be a ${n.jobTitle} in ${n.location} and married to ${n.partnerName} with ${n.numberOfChildren} child`;
  return text;
}

fortuneTeller(person);
