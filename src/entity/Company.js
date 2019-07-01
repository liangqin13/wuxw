export default class Company {
  createObject = () => {
    return {
      name: '',
      legalPerson: {
        name: '',
        idCardNumber: '',
        idCardFront: {
          id: ''
        },
        idCardBack: {
          id: ''
        },
        handheldIdCard: {
          id: ''
        }
      },
      issueDate: '',
      validDate: '',
      longTerm: false,
      businessLicense: {
        id: ''
      },
      cellPhone: '',
      telPhone: '',
      addressInfo: {
        province: {
          id: '',
          name: ''
        },
        district: {
          id: '',
          name: ''
        },
        city: {
          id: '',
          name: ''
        },
        address: ''
      }
    }
  }
}
