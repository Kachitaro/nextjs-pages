import Link, { LinkProps } from "next/link";
import classNames from "classnames";
import { ReactNode } from "react";
import { Card, Col, Row } from "react-bootstrap";
import LazyImage from "./LazyImage";

type CustomCardProps = {
  variant?:
    | "basic"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning";
  title: string;
  imageUrl: string;
  onClick?: () => void;
  redirectUrl: string;
  Description?: ReactNode;
  ActionButton?: ReactNode;
  Badge?: ReactNode;
};

type LinkWrapperProps = LinkProps & { withLink?: boolean; children: ReactNode };
export const LinkWrapper = ({ withLink, children, ...props }: LinkWrapperProps) => {
  return withLink ? (
    <Link {...(props as LinkProps)}>{children}</Link>
  ) : (
    <>{children}</>
  );
};

// export default function CustomCard() {
//   return (
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col key={idx}>
//           <Card>
//             <Card.Img variant="top" src="holder.js/100px160" />
//             <Card.Body>
//               <Card.Title>Card title</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

const CustomCard = ({
  variant = "basic",
  title,
  imageUrl,
  onClick,
  redirectUrl,
  ActionButton,
  Badge,
  Description,
}: CustomCardProps) => {
  <LinkWrapper withLink={!!redirectUrl} href={redirectUrl}>
    <Card
      className={classNames(
        "position-relative overflow-hidden"
        // styles.container
      )}>
      <div style={{ padding: 12 }}>
        <Card.Img
          as={LazyImage}
          src={imageUrl}
          alt={title}
          width="100%"
          height="auto"
          borderRadius={4}
          objectFit="scale-down"
        />
      </div>

      <Card.Body style={{ padding: 12 }}>
        <Card.Title className="text-truncate-2-lines" style={{ height: 48 }}>
          {title}
        </Card.Title>
        {Description}
      </Card.Body>

      <div className="position-absolute top-0 left-0">{Badge}</div>

      {ActionButton && <Card.Footer>{ActionButton}</Card.Footer>}
    </Card>
  </LinkWrapper>;
};

export default CustomCard;
