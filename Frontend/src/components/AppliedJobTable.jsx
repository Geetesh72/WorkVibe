import React from 'react'
import { Badge } from './ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

function AppliedJobTable() {
    return (
        <div>
            <Table>
                <TableCaption>
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Applied On</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [2, 4, 65, 68, 8].map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>16-Nov-2024</TableCell>
                                <TableCell>SDE 1</TableCell>
                                <TableCell>Well Fargo</TableCell>
                                <TableCell className="text-right"><Badge>Selected</Badge></TableCell>




                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>


    )
}

export default AppliedJobTable
