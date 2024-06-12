import {
    Card,
    CardBody,
    Avatar,
    Typography,
  } from "@material-tailwind/react";

function TeamCard({member}) {
  const {image, name, title, portfolio} = member

    return (
      <Card className="rounded-xl bg-[#F3FEFF]" shadow={false}>
        <CardBody className="text-center">
          <Avatar
            src={image}
            alt={name}
            // variant="rounded"
            size="xxl"
            className="mx-auto mb-6 object-top !rounded-xl"
          />
          <Typography 
            variant="h5" 
            color="blue-gray" 
            className="!font-semibold text-lg text-gray-900"
          >
            {name}
          </Typography>
          <Typography
            color="blue-gray"
            className="mb-2 ! text-sm !font-semibold text-gray-800"
          >
            {title}
          </Typography>
          <div className="flex items-center justify-center gap-1.5 ">
            <a 
              href={portfolio} 
                target="_blank" 
                className="!text-sm underline text-cyan-700" 
                rel="noopener noreferrer">
                  View portfolio
              </a>
          </div>
        </CardBody>
      </Card>
    );
  }


  export default TeamCard;