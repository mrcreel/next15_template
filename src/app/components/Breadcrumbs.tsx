'use client'

// From https://medium.com/@kcabading/creating-a-breadcrumb-component-in-a-next-js-app-router-a0ea24cdb91a
// https://github.com/kcabading/nextjs-breadcrumb

import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TBreadcrumpProps = {
  homeElement: ReactNode
  separator: ReactNode
  containerClasses?: string
  listClasses?: string
  activeClasses?: string
  capitalizeLinks?: boolean
}

const Breadcrumbs = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadcrumpProps) => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)

  return (
    <section className="">
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={'/'}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          const itemClasses =
            paths == href ? `${listClasses} ${activeClasses}` : listClasses
          const itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          )
        })}
      </ul>
    </section>
  )
}

export default Breadcrumbs
