import { Slash } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/global/atoms/breadcrumb"

interface BreadPageProps {
  name: string
  url: string
}

interface BreadProps {
  lastPage: BreadPageProps
  currentPage: BreadPageProps
  currentDetailsPage?: string
}

function Bread({ lastPage, currentPage, currentDetailsPage }: BreadProps) {
  return (
    <div className="mb-2 flex py-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={lastPage.url}
              className="slow text-secondary hover:text-secondary"
            >
              {lastPage.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          {currentDetailsPage ? (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={currentPage.url}
                  className={`${currentDetailsPage ? "slow cursor-pointer text-secondary hover:text-secondary" : ""}`}
                >
                  {currentPage.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold text-primary">
                  {currentDetailsPage}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-primary">
                {currentPage.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default Bread
