import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
  } from "@material-tailwind/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

function TeamCard({member}) {
    return (
      <Card className="rounded-lg bg-[#FAFAFA]" shadow={false}>
        <CardBody className="text-center">
          <Avatar
            src={member.image}
            alt={member.name}
            variant="rounded"
            size="xxl"
            className="mx-auto mb-6 object-top"
          />
          <Typography variant="h5" color="blue-gray" className="!font-medium text-lg">
            {member.name}
          </Typography>
          <Typography
            color="blue-gray"
            className="mb-2 !text-base !font-semibold text-cyan-600"
          >
            {member.title}
          </Typography>
          <div className="flex items-center justify-center gap-1.5 ">
            <IconButton variant="text" color="gray">
                <FaTwitter className="text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
                <FaLinkedin className="text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
                <FaGithub className="text-lg" />
            </IconButton>
          </div>
        </CardBody>
      </Card>
    );
  }


  export default TeamCard;