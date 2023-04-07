import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  totalProducts:any =[0,1,2,3,4,5,6,7,8,9,10,11,12,13]
  productSKU:any = ""
  locationOneColors:any = 0
  locationTwoColors:any  = 0
  locationThreeColors:any = 0
  sizeS:any = 0
    sizeM:any = 0

  sizeL:any = 0

  sizeXL:any = 0

  sizeXXL:any = 0

  sizeXXXL:any = 0

  sizeXXXXL:any = 0
  sizeSMLXL: any  = 0
  sizesArray:any = []
  sizeSMLXLPrice:any = 0
  sizeXXLPrice:any = 0
  sizeXXXLPrice:any = 0
  sizeXXXXLPrice:any = 0
  currentPrices:any = []
  totalShirts: any =  this.sizeS +this.sizeL+ this.sizeM + this.sizeXL + this.sizeXXL + this.sizeXXXL +this.sizeXXXXL
  totalCost:any = 0
  salePrice:any = 0
  totalSale:any = 0
  lessSpecialGuest:any = 0
  roi:any = 0

 
  productArray:any = [
    ["5000",12.5,14.15,15.15,16.15],
    ["202TC",12.60,14.60,15.60,16.60],
    ["3600",16.20,18.20,19.20,20.20],
    ["C1717",19.80,21.80,22.80,23.80],
    ["5400",17.10,19.10,20.10,21.10],
    ["291",18.45,20.45,21.45,22.45],
    ["3601",23.40,25.40,26.40,27.40],
    ["1800",20.25,22.25,23.25,24.25],
    ["SS3000",37.80,39.80,40.80,71.80],
    ["SS45000",36.90,38.90,39.90,40.90],
    ["IND4000",29.70,31.70,32.70,33.70],
    ["SS45000Z",30.15,32.15,33.15,34.15],
    ["IND4000Z",0,2,3,4]



    ]
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'},
    {name: 'Delaware', abbreviation: 'DE'},
    {name: 'District Of Columbia', abbreviation: 'DC'},
    {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
    {name: 'Florida', abbreviation: 'FL'},
    {name: 'Georgia', abbreviation: 'GA'},
    {name: 'Guam', abbreviation: 'GU'},
    {name: 'Hawaii', abbreviation: 'HI'},
    {name: 'Idaho', abbreviation: 'ID'},
    {name: 'Illinois', abbreviation: 'IL'},
    {name: 'Indiana', abbreviation: 'IN'},
    {name: 'Iowa', abbreviation: 'IA'},
    {name: 'Kansas', abbreviation: 'KS'},
    {name: 'Kentucky', abbreviation: 'KY'},
    {name: 'Louisiana', abbreviation: 'LA'},
    {name: 'Maine', abbreviation: 'ME'},
    {name: 'Marshall Islands', abbreviation: 'MH'},
    {name: 'Maryland', abbreviation: 'MD'},
    {name: 'Massachusetts', abbreviation: 'MA'},
    {name: 'Michigan', abbreviation: 'MI'},
    {name: 'Minnesota', abbreviation: 'MN'},
    {name: 'Mississippi', abbreviation: 'MS'},
    {name: 'Missouri', abbreviation: 'MO'},
    {name: 'Montana', abbreviation: 'MT'},
    {name: 'Nebraska', abbreviation: 'NE'},
    {name: 'Nevada', abbreviation: 'NV'},
    {name: 'New Hampshire', abbreviation: 'NH'},
    {name: 'New Jersey', abbreviation: 'NJ'},
    {name: 'New Mexico', abbreviation: 'NM'},
    {name: 'New York', abbreviation: 'NY'},
    {name: 'North Carolina', abbreviation: 'NC'},
    {name: 'North Dakota', abbreviation: 'ND'},
    {name: 'Northern Mariana Islands', abbreviation: 'MP'},
    {name: 'Ohio', abbreviation: 'OH'},
    {name: 'Oklahoma', abbreviation: 'OK'},
    {name: 'Oregon', abbreviation: 'OR'},
    {name: 'Palau', abbreviation: 'PW'},
    {name: 'Pennsylvania', abbreviation: 'PA'},
    {name: 'Puerto Rico', abbreviation: 'PR'},
    {name: 'Rhode Island', abbreviation: 'RI'},
    {name: 'South Carolina', abbreviation: 'SC'},
    {name: 'South Dakota', abbreviation: 'SD'},
    {name: 'Tennessee', abbreviation: 'TN'},
    {name: 'Texas', abbreviation: 'TX'},
    {name: 'Utah', abbreviation: 'UT'},
    {name: 'Vermont', abbreviation: 'VT'},
    {name: 'Virgin Islands', abbreviation: 'VI'},
    {name: 'Virginia', abbreviation: 'VA'},
    {name: 'Washington', abbreviation: 'WA'},
    {name: 'West Virginia', abbreviation: 'WV'},
    {name: 'Wisconsin', abbreviation: 'WI'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ];

  constructor(private fb: FormBuilder) {}
  async ngDoCheck(){

     this.sizeSMLXL = this.sizeS+  this.sizeM +  this.sizeL + this.sizeXL
      this.totalShirts =  this.sizeS + this.sizeM +  this.sizeL + this.sizeXL + this.sizeXXL + this.sizeXXXL +this.sizeXXXXL 
      this.sizesArray = [this.sizeS,this.sizeM,this.sizeL,this.sizeXL,this.sizeXXL,this.sizeXXXL,this.sizeXXXXL]
      this.setPrices()
      this.projectCostFunction(this.currentPrices)
      this.totalSale = this.salePrice * this.totalShirts
      this.lessSpecialGuest = this.totalSale * 0.20
        this.roi = this.totalSale - this.totalCost - this.lessSpecialGuest

      console.log(this.totalShirts)


  }
  projectCostFunction(sizePrices:any){
    this.sizeSMLXLPrice = sizePrices[1] * this.sizeSMLXL
     this.sizeXXLPrice = sizePrices[2] * this.sizeXXL
    this.sizeXXXLPrice = sizePrices[3] * this.sizeXXXL
  this.sizeXXXXLPrice = sizePrices[4] * this.sizeXXXXL
  this.totalCost = this.sizeSMLXLPrice + this.sizeXXLPrice + this.sizeXXXLPrice + this.sizeXXXXLPrice
  }
  setPrices(){
    for(var i=0;i<13;i++){
      if(this.productArray[i][0]==this.productSKU){
        this.currentPrices = this.productArray[i]
      }

    }
  }

  onSubmit(): void {
    alert(this.productArray[0][1]);
  }
}
