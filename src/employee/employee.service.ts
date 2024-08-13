import { Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) { }
  async create(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
    console.log("createEmployeeInput", createEmployeeInput);
    const newEmployee = this.employeeRepository.create(createEmployeeInput);
    return this.employeeRepository.save(newEmployee);
  }

  async findAll(): Promise<Employee[]> {
    const employees = await this.employeeRepository.find();
    return employees;
  }

  async findOne(id: number): Promise<Employee> {
    try {
      return await this.employeeRepository.findOneOrFail({ where: { employee_id: id } });
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }

  async update(id: number, updateEmployeeInput: UpdateEmployeeInput): Promise<Employee> {
    await this.employeeRepository.update(id, updateEmployeeInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<Employee> {
    const employee = await this.findOne(id);
    await this.employeeRepository.remove(employee);
    return employee;
  }
}
