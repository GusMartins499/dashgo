import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface IPagination {
  totalOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export function Pagination({
  totalOfRegisters,
  currentPage = 1,
  registersPerPage = 10,
  onPageChange
}: IPagination) {
  const lastPage = Math.floor(totalOfRegisters / registersPerPage)

  const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack spacing='6' direction={['column', 'row']} mt='8' justify='space-between' align='center'>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem number={1} />
            {currentPage > (2 + siblingsCount) && (
              <Text color='gray.300' w='8' textAlign='center'>...</Text>
            )}
          </>
        )}

        {previousPage.length > 0 && previousPage.map((page) => (
          <PaginationItem key={page} number={page} />
        ))}

        <PaginationItem number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map((page) => (
          <PaginationItem key={page} number={page} />
        ))}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            <PaginationItem number={lastPage} />
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <Text color='gray.300' w='8' textAlign='center'>...</Text>
            )}
          </>
        )}

      </Stack>
    </Stack>
  )
}