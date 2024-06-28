import axios from 'axios';

export const fetchAddress = async (
  zipCode: string, 
  setState: (value: string) => void, 
  setCity: (value: string) => void, 
  setStreet: (value: string) => void, 
  setNeighborhood: (value: string) => void, 
  setShowZipCodeError: (value: boolean) => void, 
  setShowStateError: (value: boolean) => void, 
  setShowCityError: (value: boolean) => void, 
  setShowStreetError: (value: boolean) => void, 
  setShowNeighborhoodError: (value: boolean) => void
) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
    const data = response.data;

    if (data.erro) {
      setShowZipCodeError(true);
      return;
    }

    setState(data.uf || '');
    setCity(data.localidade || '');
    setStreet(data.logradouro || '');
    setNeighborhood(data.bairro || '');
    
    setShowZipCodeError(false);
    setShowStateError(data.uf === '');
    setShowCityError(data.localidade === '');
    setShowStreetError(data.logradouro === '');
    setShowNeighborhoodError(data.bairro === '');
  } catch (error) {
    console.error('Error fetching address:', error);
    setShowZipCodeError(true);
  }
};

export const validateForm = (
  name: string, 
  email: string, 
  phone: string, 
  zipCode: string, 
  state: string, 
  city: string, 
  street: string, 
  neighborhood: string, 
  complement: string,
  question: string, 
  setShowNameError: (value: boolean) => void, 
  setShowEmailError: (value: boolean) => void, 
  setShowPhoneError: (value: boolean) => void, 
  setShowZipCodeError: (value: boolean) => void, 
  setShowStateError: (value: boolean) => void, 
  setShowCityError: (value: boolean) => void, 
  setShowStreetError: (value: boolean) => void, 
  setShowNeighborhoodError: (value: boolean) => void, 
  setShowComplementError: (value: boolean) => void,
  setShowQuestionError: (value: boolean) => void
): boolean => {
  setShowNameError(name === '');
  setShowEmailError(email === '');
  setShowPhoneError(phone === '');
  setShowZipCodeError(zipCode === '');
  setShowStateError(state === '');
  setShowCityError(city === '');
  setShowStreetError(street === '');
  setShowNeighborhoodError(neighborhood === '');
  setShowComplementError(complement === '');
  setShowQuestionError(question === '');

  return !(name === '' || email === '' || phone === '' || zipCode === '' || state === '' || city === '' || street === '' || neighborhood === '' || complement === '' || question === '');
};