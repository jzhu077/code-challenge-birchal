import { useEffect, useState } from "react";
import "./Campaigns.css";
import {Campaign} from "../types/campaigns.ts";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  useEffect(() => {
    fetch("/campaigns.json")
      .then((res) => res.json())
      .then(setCampaigns);
  }, []);

  const getCampaignType = (type: string): string => {
    if (type === "EOI"){
      return "Expressions of Interest";
    }
    if (type === "OFFER"){
      return "Offer";
    }
    return ""
  }

  const getCampaignStatus = (status: string, closingInDays: number, closeDateFormatted:string):string =>{
    if (status === "CLOSED"){
      return `Closed at ${closeDateFormatted}`;
    }
    return `Closes in ${closingInDays.toFixed(0)}`
  }
  return (
    <div className="campaigns">
      <div className="campaign-tiles">
        {campaigns.map((c) => (
          <div
            key={c.id}
            className="tile"
          >
            <img className="cover-image" src={c.company.coverImage} alt={c.company.name}/>
            <div className="info">
              <div className="company-info">
                <div className="logo-image">
                  <img
                    src={c.company.logoImage}
                    alt={c.company.name}
                  />
                </div>

                <div>
                  <span style={{fontWeight: 600}}>{c.company.name}</span>
                  <br/>
                  <span>{c.company.industry}</span>
                </div>
              </div>
              <div className="campaign-details">
                <div className="type">
                  {getCampaignType(c.type)}
                </div>
                <div>
                  {getCampaignStatus(c.status, c.closingInDays, c.closeDateFormatted)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
